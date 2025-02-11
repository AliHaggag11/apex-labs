import { NextResponse } from 'next/server';

// Hugging Face API endpoint for text generation
const API_URL = "https://api-inference.huggingface.co/models/google/flan-t5-xxl";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Combine messages into a single prompt
    const prompt = messages.map((msg: any) => {
      if (msg.role === 'system') {
        return `Instructions: ${msg.content}\n`;
      }
      return `${msg.role === 'user' ? 'Human' : 'Assistant'}: ${msg.content}\n`;
    }).join('');

    // Call Hugging Face API
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_length: 500,
          temperature: 0.7,
          top_p: 0.9,
          do_sample: true,
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get response from Hugging Face API');
    }

    const result = await response.json();
    const aiResponse = result[0].generated_text;

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
} 