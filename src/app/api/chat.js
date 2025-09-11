// pages/api/chat.ts
import { createClient } from '@supabase/supabase-js';
import { OpenAI } from 'openai';

// Initialize clients
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  // 1. Get the user's question from the request
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: 'Question is required.' });
  }

  // 2. Create an embedding of the user's question
  const embeddingResponse = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: question,
  });
  const questionEmbedding = embeddingResponse.data[0].embedding;

  // 3. Query Supabase for similar documents using the embedding
  // This requires a special SQL function in Supabase. You'll need to create it once.
  const { data: documents, error } = await supabase.rpc('match_documents', {
    query_embedding: questionEmbedding,
    match_threshold: 0.78, // A confidence score. Adjust as needed.
    match_count: 5,       // How many results to return.
  });

  if (error) {
    console.error('Error matching documents:', error);
    return res.status(500).json({ error: 'Failed to retrieve documents.' });
  }
  
  // 4. Construct the prompt for the LLM
  const contextText = documents.map(doc => doc.content).join('\n\n---\n\n');
  const prompt = `
    You are a helpful and professional assistant for our company.
    Based on the following context, answer the user's question.
    If the context doesn't contain the answer, say you don't have enough information.

    Context:
    ${contextText}

    Question:
    ${question}

    Answer:
  `;

  // 5. Send the prompt to the LLM to generate the final answer
  const chatResponse = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo', // Or gpt-4
    messages: [{ role: 'user', content: prompt }],
    // Optional: add 'stream: true' for a streaming response
  });
  
  const answer = chatResponse.choices[0].message.content;

  res.status(200).json({ answer });
}