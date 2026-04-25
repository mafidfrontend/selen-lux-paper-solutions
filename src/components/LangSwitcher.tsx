import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageProvider";
import { LANG_LABELS, Lang } from "@/i18n/translations";

const SHORT: Record<Lang, string> = { uz: "UZ", ru: "RU", en: "EN" };

export function LangSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1.5 rounded-full text-xs font-semibold">
          <Globe className="h-3.5 w-3.5" />
          {SHORT[lang]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => setLang(l)}
            className={lang === l ? "font-semibold text-primary" : ""}
          >
            {LANG_LABELS[l]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
