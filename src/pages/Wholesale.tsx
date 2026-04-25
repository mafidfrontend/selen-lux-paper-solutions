import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLang } from "@/i18n/LanguageProvider";
import { toast } from "@/hooks/use-toast";

export default function Wholesale() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const benefits = [t.wholesale.b1, t.wholesale.b2, t.wholesale.b3, t.wholesale.b4, t.wholesale.b5];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: t.wholesale.sent, description: t.wholesale.sentDesc });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <>
      <Section className="pt-12 md:pt-16 pb-10">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            {t.wholesale.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground text-balance">{t.wholesale.subtitle}</p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-2xl font-bold tracking-tight">{t.wholesale.benefitsTitle}</h2>
            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-elegant"
          >
            <h2 className="font-display text-2xl font-bold tracking-tight">{t.wholesale.formTitle}</h2>
            <div className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">{t.wholesale.name}</Label>
                <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="phone">{t.wholesale.phone}</Label>
                  <Input id="phone" required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">{t.wholesale.email}</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message">{t.wholesale.message}</Label>
                <Textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-cta hover:opacity-90 text-primary-foreground">
                <Send className="mr-1.5 h-4 w-4" /> {t.cta.sendRequest}
              </Button>
            </div>
          </motion.form>
        </div>
      </Section>
    </>
  );
}
