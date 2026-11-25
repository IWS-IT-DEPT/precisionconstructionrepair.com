import { NextResponse } from "next/server";
import { EMAIL_RE, SEND_DOMAIN, fieldsToHtml, sendFormEmail } from "@/app/lib/email";

const TO_ADDRESS = "quotes@precisionconstructionrepair.com";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.phone !== "string" ||
    typeof body.description !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.phone.trim() ||
    !body.description.trim() ||
    !EMAIL_RE.test(body.email.trim())
  ) {
    console.warn("[form:quote] Rejected submission: missing or invalid fields");
    return NextResponse.json({ ok: false, error: "Missing or invalid fields." }, { status: 400 });
  }

  const name = body.name.trim();
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const email = body.email.trim();
  const phone = body.phone.trim();
  const location = typeof body.location === "string" ? body.location.trim() : "";
  const timeline = typeof body.timeline === "string" ? body.timeline.trim() : "";
  const description = body.description.trim();

  const sent = await sendFormEmail("quote", {
    from: `Precision Construction Repair Website <contact@${SEND_DOMAIN}>`,
    to: [TO_ADDRESS],
    replyTo: email,
    subject: `New quote request from ${name}${company ? ` (${company})` : ""}`,
    html: fieldsToHtml([
      ["Name", name],
      ["Company", company],
      ["Email", email],
      ["Phone", phone],
      ["Facility / Project Location", location],
      ["Timeline", timeline],
      ["Project Description", description],
    ]),
  });

  if (!sent) {
    return NextResponse.json({ ok: false, error: "Failed to send request." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
