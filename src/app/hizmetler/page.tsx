"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { language, t, getLink } = useLanguage();

  const featuredServices = [
    {
      title: t("service1_title"),
      image: "/ruhsat_proje.webp",
      text: t("service1_desc"),
    },
    {
      title: t("service2_title"),
      image: "/hero_tasarim_uygulama.webp",
      text: t("service2_desc"),
    },
  ];

  const services = [
    {
      title: t("s_int"),
      text: language === "en" ? "Spatial organization, material palette, furniture, lighting, and textile design." : "Mekân kurgusu, malzeme seçkisi, mobilya, aydınlatma ve tekstil tasarımı.",
    },
    {
      title: t("s_space"),
      text: language === "en" ? "Plan solutions according to functional flow, scale, and user experience." : "Fonksiyon akışı, ölçek ve kullanıcı deneyimine göre plan çözümleri.",
    },
    {
      title: t("s_vis"),
      text: language === "en" ? "Photorealistic 3D imagery, animation, and physical material sample boards." : "Fotogerçekçi 3B görseller, animasyon ve fiziksel malzeme panosu.",
    },
    {
      title: t("s_furn"),
      text: language === "en" ? "Custom furniture production, kitchen & bathroom cabinetry, and storage solutions." : "Özel üretim mobilya, mutfak ve banyo dolapları, depolama çözümleri.",
    },
    {
      title: t("s_site"),
      text: language === "en" ? "Fabricator selection, site supervision, quality, and schedule management." : "İmalatçı seçimi, uygulama takibi, kalite ve süre kontrolü.",
    },
    {
      title: t("s_consult"),
      text: t("s_consult_desc"),
    },
  ];

  const steps = [
    ["01", language === "en" ? "Discovery" : "Keşif", language === "en" ? "Site analysis, program requirements, and budget framework." : "Mekân analizi, ihtiyaç programı ve bütçe çerçevesi."],
    ["02", language === "en" ? "Concept" : "Koncept", language === "en" ? "Plan alternatives, material direction, and mood boards." : "Plan alternatifleri, malzeme yaklaşımı ve atmosfer panosu."],
    ["03", language === "en" ? "Design" : "Proje", language === "en" ? "Working drawings, detail engineering, and fabricator coordination." : "Uygulama projeleri, detaylar ve imalatçı koordinasyonu."],
    ["04", language === "en" ? "Delivery" : "Teslim", language === "en" ? "Site supervision, final walkthroughs, and client handover." : "Şantiye takibi, son kontroller ve kullanıcı teslimi."],
  ];

  return (
    <div className="mx-auto max-w-[1600px] px-6 pt-32 pb-24 md:px-10 md:pt-40">
      <p className="eyebrow text-muted-foreground">{t("services_eyebrow")}</p>
      <h1 className="mt-4 max-w-3xl font-display text-5xl font-light md:text-7xl">{t("nav_services")}</h1>

      {/* Featured Top Services (Ruhsat Projesi & Tasarım Uygulama) */}
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {featuredServices.map((fs) => (
          <div key={fs.title} className="group">
            <div className="photo-frame bg-muted overflow-hidden">
              <Image
                src={fs.image}
                alt={fs.title}
                width={800}
                height={450}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="aspect-[16/9] max-h-[340px] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            </div>
            <h2 className="mt-5 font-display text-2xl font-light md:text-3xl">{fs.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              {fs.text}
            </p>
          </div>
        ))}
      </div>

      {/* Existing Services Grid */}
      <div className="mt-24 border-t border-border/30 pt-16">
        <p className="eyebrow text-muted-foreground mb-10">{t("services_scope_eyebrow")}</p>
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="border-l border-border/35 pl-6 transition-colors duration-300 hover:border-foreground"
            >
              <h3 className="font-display text-2xl font-light md:text-3xl">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="mt-28 border-t border-border/30 pt-16">
        <h2 className="font-display text-4xl font-light md:text-5xl">{language === "en" ? "Process" : "Süreç"}</h2>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([n, t, d]) => (
            <div
              key={n}
              className="border-t border-border/25 pt-5 transition-colors duration-300 hover:border-foreground"
            >
              <div className="flex items-center gap-3">
                <span className="eyebrow text-muted-foreground text-xs">{n}</span>
                <div className="h-[1px] flex-1 bg-border/25" />
              </div>
              <p className="mt-4 font-display text-2xl font-light">{t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="mt-28 px-6 py-16 text-foreground md:px-14">
        <p className="eyebrow text-muted-foreground mb-3">{t("home_contact_eyebrow")}</p>
        <h2 className="max-w-2xl font-display text-3xl leading-tight font-light md:text-5xl">
          {language === "en" ? "Let's discuss your project." : "Projenizi konuşalım."}
        </h2>
        <Link
          href={getLink("/iletisim")}
          className="group mt-8 inline-flex items-center gap-3 bg-foreground px-8 py-4 eyebrow text-background transition-opacity hover:opacity-85"
        >
          {t("home_contact_btn")}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
