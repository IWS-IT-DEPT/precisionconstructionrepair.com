import { sendGAEvent } from "@next/third-parties/google";

export type FormName = "contact" | "quote" | "careers";

/**
 * GA4 form outcome events. form_start is sent automatically by GA4 enhanced
 * measurement, so we only send the outcome: generate_lead / job_application
 * on success, form_error on failure.
 */
export function trackFormEvent(
  event: "generate_lead" | "job_application" | "form_error",
  form: FormName,
) {
  try {
    sendGAEvent("event", event, { form_name: form });
  } catch {
    // Analytics must never break the form.
  }
}
