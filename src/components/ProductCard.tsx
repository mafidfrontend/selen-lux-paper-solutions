import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Product } from "@/data/products";
import { useLang } from "@/i18n/LanguageProvider";
import { PHONE_HREF } from "@/data/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { lang, t } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3), ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-elegant transition-all duration-300"
    >
      <Link to={`/products/${product.id}`} className="block aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name[lang]}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-display font-semibold text-base leading-snug group-hover:text-primary transition-colors">
            {product.name[lang]}
          </h3>
        </Link>
        <p className="mt-1.5 text-xs text-muted-foreground">{product.packaging[lang]}</p>

        <div className="mt-auto pt-4 flex items-center justify-between gap-2">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-secondary/80 transition-colors"
          >
            <Phone className="h-3 w-3" />
            {t.cta.contactBulk}
          </a>
          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:gap-1.5 transition-all"
          >
            {t.cta.learnMore}
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
