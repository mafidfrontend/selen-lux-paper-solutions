import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import { ThemeToggle } from "./ThemeToggle";
import { LangSwitcher } from "./LangSwitcher";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_HREF } from "@/data/products";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/products", label: t.nav.products },
    { to: "/about", label: t.nav.about },
    { to: "/wholesale", label: t.nav.wholesale },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-tight flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-cta text-primary-foreground font-display font-bold text-sm shadow-elegant">
            SL
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight">Selen Lux</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Hygiene Paper
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "text-primary bg-primary-soft"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href={PHONE_HREF}
            className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors px-2"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden xl:inline">{PHONE}</span>
          </a>
          <LangSwitcher />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-border/60 bg-background"
          >
            <nav className="container-tight flex flex-col gap-1 py-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-2.5 text-sm font-medium rounded-md transition-colors",
                      isActive ? "text-primary bg-primary-soft" : "hover:bg-muted"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href={PHONE_HREF}
                className="mt-2 flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-primary"
              >
                <Phone className="h-4 w-4" />
                {PHONE}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
