import { NextResponse } from "next/server";
import { EMAIL_RE, SEND_DOMAIN, fieldsToHtml, sendFormEmail } from "@/app/lib/email";

const TO_ADDRESS = "careers@precisionconstructionrepair.com";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.phone !== "string" ||
    typeof body.position !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.phone.trim() ||
    !body.position.trim() ||
    !EMAIL_RE.test(body.email.trim())
  ) {
    console.warn("[form:careers] Rejected submission: missing or invalid fields");
    return NextResponse.json({ ok: false, error: "Missing or invalid fields." }, { status: 400 });
  }

  const name = body.name.trim();
  const email = body.email.trim();
  const phone = body.phone.trim();
  const position = body.position.trim();
  const experience = typeof body.experience === "string" ? body.experience.trim() : "";
  const certifications = typeof body.certifications === "string" ? body.certifications.trim() : "";
  const startDate = typeof body.startDate === "string" ? body.startDate.trim() : "";
  const notes = typeof body.notes === "string" ? body.notes.trim() : "";

  const sent = await sendFormEmail("careers", {
    from: `Precision Construction Repair Website <contact@${SEND_DOMAIN}>`,
    to: [TO_ADDRESS],
    replyTo: email,
    subject: `New careers application from ${name} (${position})`,
    html: fieldsToHtml([
      ["Name", name],
      ["Email", email],
      ["Phone", phone],
      ["Position Interested In", position],
      ["Years of Experience", experience],
      ["Certifications / Licenses", certifications],
      ["Available Start Date", startDate],
      ["Notes", notes],
    ]),
  });

  if (!sent) {
    return NextResponse.json({ ok: false, error: "Failed to send application." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
