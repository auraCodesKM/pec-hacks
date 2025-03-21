import { NextRequest, NextResponse } from 'next/server';

// API route handler for AI Co-Founder chat
export async function POST(req: NextRequest) {
  try {
    // Parse the incoming request body
    const body = await req.json();
    
    // Validate request
    if (!body.message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }
    
    // Flask backend URL - can be moved to env variable
    const backendUrl = process.env.FLASK_BACKEND_URL || 'http://localhost:5001';
    
    // Forward the request to Flask backend
    const response = await fetch(`${backendUrl}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: body.message }),
    });
    
    // Get the response data
    const data = await response.json();
    
    // If Flask returns an error
    if (!response.ok) {
      console.error('Backend error:', data);
      return NextResponse.json(
        { error: data.error || 'Something went wrong' },
        { status: response.status }
      );
    }
    
    // Return successful response
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in AI Co-Founder API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 