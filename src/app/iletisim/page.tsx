"use client";

import { ExternalLink, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const mapsUrl =
  "https://www.google.com/maps/place/KENET+M%C4%B0MARLIK/@40.3441386,27.9725994,17z/data=!3m1!4b1!4m6!3m5!1s0x14b5d379344f6913:0x3e56971620068a4c!8m2!3d40.3441345!4d27.9751743!16s%2Fg%2F11xkpvc000?entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D";
const mapsEmbedUrl =
  "https://www.google.com/maps?q=KENET%20M%C4%B0MARLIK%20Sunullah%2C%20Kemal%20%C3%96zal%20Cd.%20No%3A75%2C%2010200%20Band%C4%B1rma%2FBal%C4%B1kesir&output=embed";

const email = "info@kenetmimarlik.com";
const phones = [
  { label: "0 536 206 30 63", href: "tel:+905362063063" },
  { label: "0 543 263 85 20", href: "tel:+905432638520" },
] as const;

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-[1600px] px-6 pt-28 pb-24 md:px-10 md:pt-36">
      <div className="grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-end">
        <div>
          <p className="eyebrow text-muted-foreground">{t("contact_eyebrow")}</p>
          <h1 className="mt-4 font-display text-4xl font-light md:text-5xl">{t("contact_title")}</h1>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:justify-self-end md:text-right">
          {t("contact_desc")}
        </p>
      </div>

      <div className="mt-12 grid gap-10 border-t border-border pt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <div className="min-h-[340px] overflow-hidden border border-border bg-muted lg:min-h-[430px]">
          <iframe
            title="KENET Mimarlık harita konumu"
            src={mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full grayscale"
          />
        </div>

        <div className="grid gap-0">
          <div className="grid gap-4 border-b border-border pb-7 sm:grid-cols-[auto_1fr]">
            <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="eyebrow text-muted-foreground">{t("contact_address_title")}</p>
              <p className="mt-3 text-sm leading-relaxed">
                KENET Mimarlık
                <br />
                Sunullah, Kemal Özal Cd. No:75
                <br />
                10200 Bandırma/Balıkesir
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center gap-3 border border-foreground/20 px-6 py-3 eyebrow transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {t("contact_map_btn")}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-4 border-b border-border py-7 sm:grid-cols-[auto_1fr]">
            <Mail className="mt-1 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="eyebrow text-muted-foreground">{t("contact_email_title")}</p>
              <a
                href={`mailto:${email}`}
                className="mt-3 block text-sm transition-opacity hover:opacity-60"
              >
                {email}
              </a>
            </div>
          </div>

          <div className="grid gap-4 border-b border-border py-7 sm:grid-cols-[auto_1fr]">
            <Phone className="mt-1 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="eyebrow text-muted-foreground">{t("contact_phone_title")}</p>
              <div className="mt-3 space-y-2">
                {phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="block text-sm transition-opacity hover:opacity-60"
                  >
                    {phone.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 pt-7 sm:grid-cols-[auto_1fr]">
            <Instagram className="mt-1 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="eyebrow text-muted-foreground">{t("contact_social_title")}</p>
              <a
                href="https://www.instagram.com/kenetmimarlik/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
              >
                @kenetmimarlik
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
