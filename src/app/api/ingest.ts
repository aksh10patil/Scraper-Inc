// pages/api/ingest.ts (or a one-off script)
import { createClient } from '@supabase/supabase-js';
import { OpenAI } from 'openai';

// Initialize clients (use environment variables)
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  // Your content to be embedded
  const documentsToIngest = [
    { source: 'faq', title: 'What is your return policy?', content: 'Our return policy lasts 30 days...' },
    { source: 'service', title: 'Web Development', content: 'We build fast, responsive websites using Next.js...' }
    // ... add all your FAQs, services, portfolio items here
  ];

  for (const doc of documentsToIngest) {
    // 1. Get embedding from OpenAI
    const embeddingResponse = await openai.embeddings.create({
      model: "text-embedding-3-small", // A cost-effective and powerful model
      input: doc.content,
    });
    const embedding = embeddingResponse.data[0].embedding;

    // 2. Insert into Supabase
    const { error } = await supabase.from('documents').insert({
      source: doc.source,
      title: doc.title,
      content: doc.content,
      embedding: embedding, // The vector from OpenAI
    });

    if (error) {
      console.error('Error inserting document:', error);
    } else {
      console.log(`Successfully ingested: ${doc.title}`);
    }
  }

  res.status(200).json({ message: 'Ingestion complete!' });
}