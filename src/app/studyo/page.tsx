"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import architecturalDrawing from "@/assets/about-architectural-drawing.png";
import { useLanguage } from "@/context/LanguageContext";

function SectionDivider({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`my-20 flex items-center gap-4 md:my-24 ${reverse ? "flex-row-reverse" : ""}`}
    >
      <span className="h-px w-16 bg-foreground md:w-24" />
      <span className="h-px flex-1 bg-border" />
      <span className="h-1.5 w-1.5 bg-foreground" />
    </div>
  );
}

export default function StudioPage() {
  const { language, t, getLink } = useLanguage();

  const team = [
    { name: "Göktuğkan Şirin", role: language === "en" ? "Co-Founder, Architect" : "Kurucu Ortak, Mimar" },
    { name: "Hüseyin Akar", role: language === "en" ? "Co-Founder, Architect" : "Kurucu Ortak, Mimar" },
  ];

  const principles = [
    {
      title: t("val1_title"),
      text: t("val1_desc"),
    },
    {
      title: t("val2_title"),
      text: t("val2_desc"),
    },
    {
      title: t("val3_title"),
      text: t("val3_desc"),
    },
  ];

  return (
    <div className="mx-auto max-w-[1600px] px-6 pt-30 pb-24 md:px-10 md:pt-36">
      <section className="grid gap-10 md:grid-cols-[1.08fr_0.92fr] md:items-end">
        <div>
          <p className="eyebrow text-muted-foreground">{t("studio_eyebrow")}</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] font-light md:text-7xl">
            {language === "en" ? "A fresh and innovative architecture studio." : "Genç ve yenilikçi bir mimarlık stüdyosu."}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("studio_desc")}
          </p>
        </div>

        <div className="relative h-64 overflow-hidden md:h-[48dvh] md:max-h-[460px] md:min-h-[340px]">
          <Image
            src={architecturalDrawing}
            alt="Kenet Mimarlık Studio"
            fill
            sizes="(min-width: 768px) 46vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <SectionDivider />

      <section className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
        <p className="eyebrow text-muted-foreground">{language === "en" ? "Foundation" : "Kuruluş"}</p>
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            {language === "en"
              ? "The studio was established with the vision of channeling the founders' experience gained in major metropolitan hubs into a refined, innovative, and practical architectural approach in their hometown."
              : "Ofis, kurucuların büyükşehirlerde edindiği deneyimi kendi memleketlerinde nitelikli, yenilikçi ve uygulanabilir bir mimarlık pratiğine dönüştürme fikriyle kuruldu."}
          </p>
          <p>
            {language === "en"
              ? "Kenet Mimarlık operates with a dynamic and solution-oriented team structure that manages the journey from permit drawings to design and turn-key execution as one unified whole."
              : "Kenet Mimarlık; ruhsat projesinden tasarım ve uygulamaya kadar süreci bütüncül ele alan, genç, dinamik ve çözüm odaklı bir ekip yapısıyla çalışır."}
          </p>
        </div>
      </section>

      <SectionDivider reverse />

      <section>
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-muted-foreground">{t("home_approach_eyebrow")}</p>
            <h2 className="mt-5 max-w-sm font-display text-4xl leading-tight font-light md:text-5xl">
              {language === "en" ? "Controlled, selective, and executable." : "Kontrollü, seçici ve uygulanabilir."}
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {principles.map((item, index) => (
              <div key={item.title} className="group">
                <p className="font-display text-5xl leading-none font-light text-muted-foreground/25 transition-colors group-hover:text-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-8 font-display text-2xl font-light">{item.title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="eyebrow text-muted-foreground">{t("studio_founders_title")}</p>
          <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight font-light md:text-5xl">
            {language === "en" ? "Two architects, one focus: a seamlessly built project journey." : "İki mimar, tek odak: doğru kurulmuş proje süreci."}
          </h2>
        </div>

        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {team.map((m) => (
            <div key={m.name}>
              <p className="font-display text-4xl leading-tight font-light">{m.name}</p>
              <p className="mt-2 eyebrow text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider reverse />

      <section>
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow text-muted-foreground">{t("home_contact_eyebrow")}</p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight font-light md:text-5xl">
              {language === "en" ? "Contact Kenet Mimarlık for the first step of your project." : "Projenin ilk adımı için Kenet Mimarlık ile görüşün."}
            </h2>
          </div>
          <Link
            href={getLink("/iletisim")}
            className="group inline-flex min-h-12 w-fit items-center gap-3 border-b border-foreground pb-1 eyebrow transition-opacity hover:opacity-60"
          >
            {t("home_contact_btn")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
