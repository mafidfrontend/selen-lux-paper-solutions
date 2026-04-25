import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Factory, ShieldCheck, MapPin, Package, BadgeCheck, Truck } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { Section, SectionHeader } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products, CATEGORY_LABELS, ProductCategory, PHONE_HREF, PHONE } from "@/data/products";
import heroImg from "@/assets/hero-factory.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const { lang, t } = useLang();
  const categories: ProductCategory[] = ["napkins", "wetwipes", "toilet", "household"];
  const featured = products.slice(0, 6);

  const partnerNames = ["Hilton", "Korzinka", "Havas", "Magnum", "Evos", "Macro"];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Selen Lux paper manufacturing facility"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative container-tight pt-20 pb-24 md:pt-28 md:pb-32 text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            {t.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl text-balance leading-[1.05]"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.25 }}
            className="mt-6 max-w-2xl text-base md:text-xl text-white/85 text-balance"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-elevated">
              <Link to="/contact">
                {t.cta.contact}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-primary-foreground hover:bg-white/15 hover:text-primary-foreground backdrop-blur"
            >
              <Link to="/products">{t.nav.products}</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.55 }}
            className="mt-14 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl"
          >
            {[
              { l: t.hero.stat1, v: t.hero.stat1v },
              { l: t.hero.stat2, v: t.hero.stat2v },
              { l: t.hero.stat3, v: t.hero.stat3v },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-white/30 pl-3 md:pl-5">
                <div className="font-display text-xl md:text-3xl font-bold">{s.v}</div>
                <div className="mt-1 text-[11px] md:text-xs uppercase tracking-wider text-white/70 leading-tight">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <Section>
        <SectionHeader eyebrow={t.aboutPreview.eyebrow} title={t.aboutPreview.title} subtitle={t.aboutPreview.body} />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Factory, t: t.aboutPreview.f1t, d: t.aboutPreview.f1d },
            { icon: ShieldCheck, t: t.aboutPreview.f2t, d: t.aboutPreview.f2d },
            { icon: MapPin, t: t.aboutPreview.f3t, d: t.aboutPreview.f3d },
          ].map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-elegant transition-all"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary-soft text-primary mb-4">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-lg">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CATEGORIES */}
      <Section className="bg-surface">
        <SectionHeader eyebrow={t.categories.eyebrow} title={t.categories.title} subtitle={t.categories.subtitle} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => {
            const sample = products.find((p) => p.category === cat)!;
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease }}
              >
                <Link
                  to={`/products?category=${cat}`}
                  className="group block overflow-hidden rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-elegant transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={sample.image}
                      alt={CATEGORY_LABELS[cat][lang]}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <h3 className="font-display font-semibold">{CATEGORY_LABELS[cat][lang]}</h3>
                    <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* FEATURED */}
      <Section>
        <SectionHeader eyebrow={t.featured.eyebrow} title={t.featured.title} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/products">
              {t.cta.viewAll} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section className="bg-surface">
        <SectionHeader eyebrow={t.why.eyebrow} title={t.why.title} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Factory, t: t.why.f1, d: t.why.f1d, color: "primary" },
            { icon: BadgeCheck, t: t.why.f2, d: t.why.f2d, color: "secondary" },
            { icon: Truck, t: t.why.f3, d: t.why.f3d, color: "primary" },
            { icon: Package, t: t.why.f4, d: t.why.f4d, color: "secondary" },
          ].map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.07, ease }}
              className="rounded-xl bg-card border border-border p-6 hover:border-primary/40 hover:shadow-elegant transition-all"
            >
              <div
                className={`grid h-11 w-11 place-items-center rounded-lg mb-4 ${
                  f.color === "primary" ? "bg-primary-soft text-primary" : "bg-secondary-soft text-secondary"
                }`}
              >
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PARTNERS */}
      <Section>
        <SectionHeader eyebrow={t.partners.eyebrow} title={t.partners.title} />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partnerNames.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05, ease }}
              className="grid h-20 place-items-center rounded-lg border border-border bg-card font-display font-bold text-lg text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT CTA */}
      <Section className="pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="relative overflow-hidden rounded-2xl bg-gradient-cta px-6 py-12 md:px-12 md:py-16 text-primary-foreground shadow-elevated"
        >
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-balance">
              {t.contactCta.title}
            </h2>
            <p className="mt-3 text-base md:text-lg text-white/85 text-balance">{t.contactCta.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link to="/contact">
                  {t.cta.contact} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground"
              >
                <a href={PHONE_HREF}>
                  <Phone className="mr-1 h-4 w-4" /> {PHONE}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
