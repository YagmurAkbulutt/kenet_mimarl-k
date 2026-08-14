import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import architecturalDrawing from "@/assets/about-architectural-drawing.png";

export const metadata: Metadata = {
  title: "Hakkımızda — Kenet Mimarlık",
  description:
    "Kenet Mimarlık; Göktuğkan Şirin ve Hüseyin Akar tarafından Bandırma, Balıkesir'de kurulan genç, dinamik ve yenilikçi mimarlık stüdyosu.",
  openGraph: {
    title: "Hakkımızda — Kenet Mimarlık",
    description: "Bandırma, Balıkesir merkezli genç, dinamik ve yenilikçi mimarlık stüdyosu.",
  },
};

const team = [
  { name: "Göktuğkan Şirin", role: "Kurucu Ortak, Mimar" },
  { name: "Hüseyin Akar", role: "Kurucu Ortak, Mimar" },
];

const principles = [
  {
    title: "Bütüncül Tasarım",
    text: "İlk fikirden ruhsat, detay ve uygulamaya kadar kararları aynı mimari çizgide tutan kontrollü süreç.",
  },
  {
    title: "Net Proje Disiplini",
    text: "Estetik beklentiyi teknik doğruluk, bütçe, takvim ve saha gerçekliğiyle birlikte yöneten profesyonel çalışma düzeni.",
  },
  {
    title: "Seçici Detay",
    text: "Malzeme, oran, ışık ve işçilik kararlarında sade ama güçlü; uzun ömürlü ve nitelikli mekân dili.",
  },
];

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
  return (
    <div className="mx-auto max-w-[1600px] px-6 pt-30 pb-24 md:px-10 md:pt-36">
      <section className="grid gap-10 md:grid-cols-[1.08fr_0.92fr] md:items-end">
        <div>
          <p className="eyebrow text-muted-foreground">Hakkımızda</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] font-light md:text-7xl">
            Genç ve yenilikçi bir mimarlık stüdyosu.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Kenet Mimarlık, kurucu mimarlar Göktuğkan Şirin ve Hüseyin Akar tarafından kurulan;
            ruhsat, tasarım ve uygulama süreçlerini aynı bütünlük içinde ele alan bir mimarlık
            ofisidir.
          </p>
        </div>

        <div className="relative h-64 overflow-hidden md:h-[48dvh] md:max-h-[460px] md:min-h-[340px]">
          <Image
            src={architecturalDrawing}
            alt="Mimari ruhsat projesi, eskiz çizimleri ve ölçek cetveli detayı"
            fill
            sizes="(min-width: 768px) 46vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <SectionDivider />

      <section className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
        <p className="eyebrow text-muted-foreground">Kuruluş</p>
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            Ofis, kurucuların büyükşehirlerde edindiği deneyimi kendi memleketlerinde nitelikli,
            yenilikçi ve uygulanabilir bir mimarlık pratiğine dönüştürme fikriyle kuruldu.
          </p>
          <p>
            Kenet Mimarlık; ruhsat projesinden tasarım ve uygulamaya kadar süreci bütüncül ele alan,
            genç, dinamik ve çözüm odaklı bir ekip yapısıyla çalışır. Hedefi, bulunduğu çevrede
            yenilik hissi güçlü, uygulanabilir ve kalıcı mekânlar üretmektir.
          </p>
        </div>
      </section>

      <SectionDivider reverse />

      <section>
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-muted-foreground">Yaklaşım</p>
            <h2 className="mt-5 max-w-sm font-display text-4xl leading-tight font-light md:text-5xl">
              Kontrollü, seçici ve uygulanabilir.
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
          <p className="eyebrow text-muted-foreground">Kurucular</p>
          <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight font-light md:text-5xl">
            İki mimar, tek odak: doğru kurulmuş proje süreci.
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
            <p className="eyebrow text-muted-foreground">İletişim</p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight font-light md:text-5xl">
              Projenin ilk adımı için Kenet Mimarlık ile görüşün.
            </h2>
          </div>
          <Link
            href="/iletisim"
            className="group inline-flex min-h-12 w-fit items-center gap-3 border-b border-foreground pb-1 eyebrow transition-opacity hover:opacity-60"
          >
            İletişime Geçin
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
