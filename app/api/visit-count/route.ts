// app/api/visit-count/route.ts
//
// Returns the current home page visit count as JSON. CORS is deliberately
// open here so hdtv-automation-hub — a separate Vercel project on a
// different domain — can fetch this value directly from the browser.
//
// Requires: Vercel KV enabled on THIS project (same as track-visit/route.ts).
// Requires npm package: @vercel/kv

import { kv } from "@vercel/kv";

export async function GET() {
  try {
    const count = (await kv.get("fbo_membership_home_visits")) || 0;
    return Response.json(
      { count },
      { headers: { "Access-Control-Allow-Origin": "*" } }
    );
  } catch (err) {
    console.error("Failed to read visit count:", err);
    return Response.json({ error: "Could not read visit count" }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    },
  });
}
