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

type SendOptions = Parameters<typeof resend.emails.send>[0];

/**
 * Sends a form notification and logs the outcome to Vercel runtime logs.
 * Logs only the form name and Resend result, never the submitted contents.
 */
export async function sendFormEmail(form: string, options: SendOptions) {
  try {
    const { data, error } = await resend.emails.send(options);
    if (error) {
      console.error(`[form:${form}] Resend send failed`, {
        name: error.name,
        message: error.message,
      });
      return false;
    }
    console.info(`[form:${form}] Resend send ok`, { id: data?.id });
    return true;
  } catch (err) {
    console.error(`[form:${form}] Resend send threw`, err);
    return false;
  }
}
