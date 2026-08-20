import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hizmetler — Kenet Mimarlık",
  description:
    "Ruhsat projesi, tasarım & uygulama, iç mimari tasarım, 3B görselleştirme ve şantiye yönetimi hizmetleri.",
  openGraph: {
    title: "Hizmetler — Kenet Mimarlık",
    description: "Konseptten teslimata uçtan uca iç mimari ve mimari hizmetler.",
  },
};

const featuredServices = [
  {
    title: "Ruhsat Projesi",
    image: "/ruhsat_proje.webp",
    text: "Yasal mevzuat ve imar yönetmeliklerine uygun mimari ruhsat projelerini hazırlıyor, yetkili kurum onay süreçlerini profesyonel olarak yürütüyoruz.",
  },
  {
    title: "Tasarım & Uygulama",
    image: "/hero_tasarim_uygulama.webp",
    text: "Konsept tasarımdan anahtar teslim uygulamaya kadar tüm iç mimari süreçleri estetik, fonksiyonel detaylar ve titiz şantiye takibiyle hayata geçiriyoruz.",
  },
];

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
    <div className="mx-auto max-w-[1600px] px-6 pt-32 pb-24 md:px-10 md:pt-40">
      <p className="eyebrow text-muted-foreground">Ne yapıyoruz</p>
      <h1 className="mt-4 max-w-3xl font-display text-5xl font-light md:text-7xl">Hizmetler</h1>

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
        <p className="eyebrow text-muted-foreground mb-10">Tüm Disiplinler</p>
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
        <h2 className="font-display text-4xl font-light md:text-5xl">Süreç</h2>
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
        <p className="eyebrow text-muted-foreground mb-3">İletişim</p>
        <h2 className="max-w-2xl font-display text-3xl leading-tight font-light md:text-5xl">
          Projenizi konuşalım.
        </h2>
        <Link
          href="/iletisim"
          className="group mt-8 inline-flex items-center gap-3 bg-foreground px-8 py-4 eyebrow text-background transition-opacity hover:opacity-85"
        >
          İletişime Geçin
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
