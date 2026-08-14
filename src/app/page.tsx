import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import studio from "@/assets/studio-color.jpg";
import { SplitHero } from "@/components/SplitHero";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Kenet Mimarlık — İç Mimari ve İç Mekân Tasarımı",
  description:
    "Kenet Mimarlık; konut, otel, ofis ve ticari alanlarda ışık, malzeme ve oran üzerine kurulu premium iç mimari projeler üretir.",
  openGraph: {
    title: "Kenet Mimarlık — İç Mimari ve İç Mekân Tasarımı",
    description:
      "Konut, otel, ofis ve ticari alanlarda sakin ve premium bir iç mekân tasarım pratiği.",
  },
};

export default function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <div>
      <SplitHero />

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <p className="eyebrow text-muted-foreground">Yaklaşım</p>
          <div>
            <h2 className="font-display text-3xl leading-tight font-light md:text-5xl">
              Her projeye kullanıcının günlük ritmini dinleyerek başlarız. Işık, doku ve ölçek; iç
              mekânın tek süsüdür.
            </h2>
            <Link
              href="/studyo"
              className="mt-10 inline-flex min-h-11 items-center gap-3 border-b border-foreground pb-1 eyebrow transition-opacity hover:opacity-60"
            >
              Stüdyoyu Tanıyın <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-4xl font-light md:text-6xl">Seçilmiş Projeler</h2>
            <Link
              href="/projeler"
              className="link-underline eyebrow text-muted-foreground hover:text-foreground"
            >
              Tüm projeler
            </Link>
          </div>

          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {featured.map((p, i) => (
              <Link
                key={p.slug}
                href={`/projeler/${p.slug}`}
                className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
              >
                <div className="photo-frame bg-muted">
                  <Image
                    src={p.cover}
                    alt={`${p.title} — ${p.category} projesi`}
                    width={1400}
                    height={1000}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-light transition-opacity group-hover:opacity-60 md:text-3xl">
                    {p.title}
                  </h3>
                  <span className="shrink-0 eyebrow text-muted-foreground">{p.year}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {p.category} · {p.location}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1600px] items-center gap-0 md:grid-cols-2">
          <Image
            src={studio}
            alt="Kenet Mimarlık stüdyosunda maket ve çizimlerin bulunduğu çalışma masası"
            width={1400}
            height={1000}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-full w-full object-cover"
          />
          <div className="px-6 py-20 md:px-16">
            <p className="eyebrow text-primary-foreground/50">Stüdyo</p>
            <h2 className="mt-6 font-display text-4xl leading-tight font-light md:text-5xl">
              Küçük ekip, uzun düşünme süresi.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              Kenet Mimarlık, konsept aşamasından uygulamaya kadar tek bir ekiple ilerler. Bu
              süreklilik, tasarım kararlarının şantiyede de aynı hassasiyetle karşılık bulmasını
              sağlar.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                ["16", "yıl"],
                ["120+", "proje"],
                ["9", "ödül"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-4xl font-light">{n}</p>
                  <p className="mt-1 eyebrow text-primary-foreground/50">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-6 py-24 md:grid-cols-[1.2fr_auto] md:items-end md:px-10 md:py-32">
          <div>
            <p className="eyebrow text-muted-foreground">İletişim</p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight font-light md:text-6xl">
              Mekânınızı birlikte kurgulayalım.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Kısa bir görüşmeyle ihtiyaç programınızı, bütçenizi ve takviminizi netleştirelim.
            </p>
          </div>
          <Link
            href="/iletisim"
            className="group inline-flex min-h-12 w-fit items-center gap-3 bg-primary px-8 py-4 eyebrow text-primary-foreground transition-opacity hover:opacity-85"
          >
            İletişime Geçin
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
