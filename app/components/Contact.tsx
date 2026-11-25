import Link from "next/link";
import ContactForm from "./ContactForm";

const HOURS = [
  { day: "Monday", time: "7:00 am – 3:30 pm" },
  { day: "Tuesday", time: "7:00 am – 3:30 pm" },
  { day: "Wednesday", time: "7:00 am – 3:30 pm" },
  { day: "Thursday", time: "7:00 am – 3:30 pm" },
  { day: "Friday", time: "7:00 am – 3:30 pm" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-paper-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-sm font-semibold uppercase tracking-widest text-brand-dark">
            Contact Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            Drop us a line
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Questions about our services or want to talk to our team? Send us a
            message. Ready to price out a job?{" "}
            <Link href="/quote" className="font-medium text-brand-dark hover:underline">
              Get a Quote
            </Link>{" "}
            instead.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="rounded-sm border border-line bg-paper p-6 sm:p-8">
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-lg font-bold text-ink">Precision Construction Repair</h3>
              <p className="mt-2 text-ink-soft">7111 U.S. 45</p>
              <p className="text-ink-soft">Eight Mile, AL, USA</p>
              <div className="mt-4 space-y-1">
                <a href="tel:12513957447" className="block font-medium text-brand-dark hover:underline">
                  (251) 395-7447
                </a>
                <a
                  href="mailto:sales@precisionconstructionrepair.com"
                  className="block font-medium text-brand-dark hover:underline"
                >
                  sales@precisionconstructionrepair.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-ink">Hours</h3>
              <dl className="mt-3 divide-y divide-line border-y border-line text-sm">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex justify-between py-2">
                    <dt className="text-ink-soft">{h.day}</dt>
                    <dd className="font-medium text-ink">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
