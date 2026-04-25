import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { products, CATEGORY_LABELS, ProductCategory } from "@/data/products";
import { useLang } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const CATEGORIES: ProductCategory[] = ["napkins", "wetwipes", "toilet", "household"];

export default function Products() {
  const { lang, t } = useLang();
  const [params, setParams] = useSearchParams();
  const initialCat = params.get("category") as ProductCategory | null;
  const [category, setCategory] = useState<ProductCategory | "all">(initialCat ?? "all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const next = new URLSearchParams(params);
    if (category === "all") next.delete("category");
    else next.set("category", category);
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = category === "all" || p.category === category;
      const q = query.trim().toLowerCase();
      const matchQuery =
        !q ||
        p.name[lang].toLowerCase().includes(q) ||
        p.description[lang].toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [category, query, lang]);

  return (
    <>
      <Section className="pb-6 pt-12 md:pt-16">
        <SectionHeader title={t.products.title} subtitle={t.products.subtitle} align="left" />
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            <FilterPill active={category === "all"} onClick={() => setCategory("all")}>
              {t.products.all}
            </FilterPill>
            {CATEGORIES.map((c) => (
              <FilterPill key={c} active={category === c} onClick={() => setCategory(c)}>
                {CATEGORY_LABELS[c][lang]}
              </FilterPill>
            ))}
          </div>
          <div className="relative md:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.products.search}
              className="pl-9"
            />
          </div>
        </div>
      </Section>

      <Section className="pt-6">
        {filtered.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center text-muted-foreground"
          >
            {t.products.noResults}
          </motion.p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-elegant"
          : "border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}
