import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Section } from "@/components/Section";
import { useLang } from "@/i18n/LanguageProvider";
import { PHONE, PHONE_HREF, EMAIL } from "@/data/products";

export default function Contact() {
  const { t } = useLang();

  const items = [
    { icon: Phone, label: t.contact.phoneLabel, value: PHONE, href: PHONE_HREF },
    { icon: Mail, label: t.contact.emailLabel, value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: t.contact.addressLabel, value: t.contact.address },
    { icon: Clock, label: t.contact.hoursLabel, value: t.contact.hours },
  ];

  return (
    <Section className="pt-12 md:pt-16">
      <div className="max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
          {t.contact.title}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground text-balance">{t.contact.subtitle}</p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {items.map((it, i) => {
          const Inner = (
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-elegant transition-all h-full">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {it.label}
                </div>
                <div className="mt-1 font-display text-lg font-semibold">{it.value}</div>
              </div>
            </div>
          );
          return (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              {it.href ? <a href={it.href}>{Inner}</a> : Inner}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 overflow-hidden rounded-2xl border border-border shadow-elegant"
      >
        <iframe
          title="Selen Lux location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=69.13%2C41.25%2C69.36%2C41.36&layer=mapnik"
          className="h-[360px] w-full"
          loading="lazy"
        />
      </motion.div>
    </Section>
  );
}
