import { motion } from "framer-motion";
import { Factory, ShieldCheck, Target } from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { useLang } from "@/i18n/LanguageProvider";
import heroImg from "@/assets/hero-factory.jpg";

export default function About() {
  const { t } = useLang();

  const blocks = [
    { icon: Target, t: t.about.missionTitle, d: t.about.mission },
    { icon: Factory, t: t.about.capacityTitle, d: t.about.capacity },
    { icon: ShieldCheck, t: t.about.qualityTitle, d: t.about.quality },
  ];

  return (
    <>
      <Section className="pt-12 md:pt-16">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            {t.about.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground text-balance">{t.about.lead}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 aspect-[16/8] overflow-hidden rounded-2xl border border-border shadow-elevated"
        >
          <img
            src={heroImg}
            alt="Selen Lux factory"
            loading="lazy"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {blocks.map((b, i) => (
            <motion.div
              key={b.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-border bg-card p-7 hover:border-primary/40 hover:shadow-elegant transition-all"
            >
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-cta text-primary-foreground mb-5">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-xl">{b.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader title={t.hero.title} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { l: t.hero.stat1, v: t.hero.stat1v },
            { l: t.hero.stat2, v: t.hero.stat2v },
            { l: t.hero.stat3, v: t.hero.stat3v },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-border bg-card p-7 text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
