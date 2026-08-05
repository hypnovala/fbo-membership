// app/api/track-visit/route.ts
//
// Called once when the fbo.brockjohn.com home page loads. Increments a
// counter stored in Vercel KV. No personal data, no cookies — just a
// running total of page loads.
//
// Requires: Vercel KV enabled on THIS project (fbo-membership). This is a
// separate Vercel project from fbo-modules, so it needs its own KV
// database connected — enabling KV on fbo-modules does not cover this one.
// Requires npm package: @vercel/kv

import { kv } from "@vercel/kv";

export async function POST() {
  try {
    const count = await kv.incr("fbo_membership_home_visits");
    return Response.json({ count });
  } catch (err) {
    console.error("Failed to increment visit count:", err);
    return Response.json({ error: "Could not record visit" }, { status: 500 });
  }
}
