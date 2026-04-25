import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Phone, Package, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { products, CATEGORY_LABELS, PHONE, PHONE_HREF } from "@/data/products";
import { useLang } from "@/i18n/LanguageProvider";
import NotFound from "./NotFound";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { lang, t } = useLang();
  const product = products.find((p) => p.id === id);

  if (!product) return <NotFound />;

  return (
    <Section className="pt-12 md:pt-16">
      <Link
        to="/products"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> {t.productDetail.back}
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-square overflow-hidden rounded-2xl bg-muted border border-border"
        >
          <img
            src={product.image}
            alt={product.name[lang]}
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            {CATEGORY_LABELS[product.category][lang]}
          </div>
          <h1 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-balance">
            {product.name[lang]}
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {product.description[lang]}
          </p>

          <div className="mt-7 grid gap-3">
            <InfoRow
              icon={<Package className="h-4 w-4" />}
              label={t.productDetail.packaging}
              value={product.packaging[lang]}
            />
            <InfoRow
              icon={<ShieldCheck className="h-4 w-4" />}
              label={t.products.bulkPrice}
              value={t.products.onRequest}
            />
          </div>

          <div className="mt-6 rounded-xl border border-secondary/30 bg-secondary-soft/50 p-4 text-sm">
            <p className="text-foreground/80">{t.productDetail.bulkNote}</p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-cta hover:opacity-90 text-primary-foreground shadow-elegant">
              <a href={PHONE_HREF}>
                <Phone className="mr-1.5 h-4 w-4" /> {PHONE}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">{t.cta.contact}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
      <div className="grid h-8 w-8 place-items-center rounded-md bg-primary-soft text-primary shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}
