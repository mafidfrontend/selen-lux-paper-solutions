import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { PHONE, PHONE_HREF, EMAIL } from "@/data/products";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-surface mt-20">
      <div className="container-tight py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-cta text-primary-foreground font-display font-bold text-sm">
              SL
            </span>
            <span className="font-display text-lg font-bold">Selen Lux</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">{t.footer.tagline}</p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold mb-3">{t.footer.navigation}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.home}</Link></li>
            <li><Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.products}</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.about}</Link></li>
            <li><Link to="/wholesale" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.wholesale}</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold mb-3">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={PHONE_HREF} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-3.5 w-3.5" /> {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-3.5 w-3.5" /> {EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> {t.contact.address}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-tight py-4 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <span>© {year} Selen Lux. {t.footer.rights}</span>
          <span>{t.contact.hours}</span>
        </div>
      </div>
    </footer>
  );
}
