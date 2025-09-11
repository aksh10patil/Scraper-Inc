// src/app/api/ingest/route.ts

import { createClient } from '@supabase/supabase-js';
import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

// Create the Supabase admin client for server-side operations
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// This function will run when you visit the /api/ingest URL
export async function GET() {
  try {
    // --- IMPORTANT: REPLACE WITH YOUR ACTUAL DATA ---
    const documentsToIngest = [
      { 
        source: 'faq', 
        title: 'What is your return policy?', 
        content: 'Our return policy allows for returns within 30 days of purchase. The item must be unused and in its original packaging.' 
      },
      { 
        source: 'faq', 
        title: 'How long does shipping take?', 
        content: 'Standard shipping typically takes 5-7 business days. Expedited shipping is available for an additional cost and takes 2-3 business days.' 
      },
      { 
        source: 'service', 
        title: 'Custom Web Development', 
        content: 'We offer custom web development services using modern technologies like Next.js and Tailwind CSS to build fast, scalable, and user-friendly websites.' 
      },
      // ... ADD ALL YOUR FAQS, SERVICES, AND PORTFOLIO INFO HERE
    ];
    // ----------------------------------------------------

    for (const doc of documentsToIngest) {
      const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: doc.content,
      });
      const embedding = embeddingResponse.data[0].embedding;

      const { error } = await supabaseAdmin.from('documents').insert({
        source: doc.source,
        title: doc.title,
        content: doc.content,
        embedding: embedding,
      });

      if (error) {
        console.error("Error inserting document:", doc.title, error);
      } else {
        console.log("Successfully ingested:", doc.title);
      }
    }

    return NextResponse.json({ message: 'Ingestion complete!' });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to ingest documents.' }, { status: 500 });
  }
}