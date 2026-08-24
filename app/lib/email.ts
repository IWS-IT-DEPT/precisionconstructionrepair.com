import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);
export const SEND_DOMAIN = process.env.RESEND_EMAIL_DOMAIN ?? "precisionconstructionrepair.com";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function fieldsToHtml(fields: Array<[label: string, value: string]>) {
  return fields
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value).replace(/\n/g, "<br />")}</p>`,
    )
    .join("\n");
}
