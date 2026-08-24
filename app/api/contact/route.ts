import { NextResponse } from "next/server";

// TODO: wire this up to a real email/CRM provider (e.g. Resend) so submissions
// actually reach the business. Right now this just validates and echoes back.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.message.trim()
  ) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
