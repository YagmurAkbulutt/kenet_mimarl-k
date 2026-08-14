import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hizmetler — Kenet Mimarlık",
  description:
    "İç mimari tasarım, mekân kurgusu, mobilya ve aydınlatma seçimi, uygulama projesi, 3B görselleştirme ve şantiye yönetimi hizmetleri.",
  openGraph: {
    title: "Hizmetler — Kenet Mimarlık",
    description: "Konseptten teslimata uçtan uca iç mimari ve iç mekân tasarım hizmetleri.",
  },
};

const services = [
  {
    title: "İç Mimari Tasarım",
    text: "Mekân kurgusu, malzeme seçkisi, mobilya, aydınlatma ve tekstil tasarımı.",
  },
  {
    title: "Mekân Planlama",
    text: "Fonksiyon akışı, ölçek ve kullanıcı deneyimine göre plan çözümleri.",
  },
  {
    title: "Görselleştirme",
    text: "Fotogerçekçi 3B görseller, animasyon ve fiziksel malzeme panosu.",
  },
  {
    title: "Mobilya Tasarımı",
    text: "Özel üretim mobilya, mutfak ve banyo dolapları, depolama çözümleri.",
  },
  {
    title: "Uygulama & Şantiye",
    text: "İmalatçı seçimi, uygulama takibi, kalite ve süre kontrolü.",
  },
  { title: "Danışmanlık", text: "Mevcut mekân değerlendirmesi, renovasyon ve stil yönlendirmesi." },
];

const steps = [
  ["01", "Keşif", "Mekân analizi, ihtiyaç programı ve bütçe çerçevesi."],
  ["02", "Konsept", "Plan alternatifleri, malzeme yaklaşımı ve atmosfer panosu."],
  ["03", "Proje", "Uygulama projeleri, detaylar ve imalatçı koordinasyonu."],
  ["04", "Teslim", "Şantiye takibi, son kontroller ve kullanıcı teslimi."],
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 pt-36 pb-24 md:px-10 md:pt-48">
      <p className="eyebrow text-muted-foreground">Ne yapıyoruz</p>
      <h1 className="mt-6 max-w-3xl font-display text-5xl font-light md:text-7xl">Hizmetler</h1>

      <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="border-t border-border pt-6">
            <h2 className="font-display text-2xl font-light md:text-3xl">{s.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-28">
        <h2 className="font-display text-4xl font-light md:text-5xl">Süreç</h2>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([n, t, d]) => (
            <div key={n} className="border-t border-border pt-6">
              <p className="eyebrow text-muted-foreground">{n}</p>
              <p className="mt-4 font-display text-2xl font-light">{t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-28 bg-primary px-6 py-16 text-primary-foreground md:px-14">
        <h2 className="max-w-2xl font-display text-3xl leading-tight font-light md:text-5xl">
          Projenizi konuşalım.
        </h2>
        <Link
          href="/iletisim"
          className="group mt-8 inline-flex items-center gap-3 border border-primary-foreground/40 px-8 py-4 eyebrow transition-colors hover:bg-primary-foreground hover:text-primary"
        >
          İletişime Geçin
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
