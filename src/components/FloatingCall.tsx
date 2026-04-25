import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { PHONE_HREF } from "@/data/products";
import { useLang } from "@/i18n/LanguageProvider";

export function FloatingCall() {
  const { t } = useLang();
  return (
    <motion.a
      href={PHONE_HREF}
      aria-label={t.cta.call}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-secondary animate-pulse-ring" />
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-accent text-secondary-foreground shadow-elevated">
        <Phone className="h-5 w-5" />
      </span>
      <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-foreground text-background px-3 py-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        {t.cta.call}
      </span>
    </motion.a>
  );
}
