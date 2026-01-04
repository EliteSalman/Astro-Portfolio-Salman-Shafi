// src/app/api/turnstile/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // This reads the REAL environment variable from the server at request time
  const siteKey = process.env.TURNSTILE_SITE_KEY;
  return NextResponse.json({ siteKey });
}
