import Image from "next/image";
import type { Metadata } from "next";
import studio from "@/assets/studio-color.jpg";
import detail1 from "@/assets/detail1-color.jpg";

export const metadata: Metadata = {
  title: "Stüdyo — Kenet Mimarlık",
  description:
    "Kenet Mimarlık; Bandırma, Balıkesir merkezli, sade ve kalıcı iç mekân tasarımına odaklanan bir tasarım stüdyosu.",
  openGraph: {
    title: "Stüdyo — Kenet Mimarlık",
    description:
      "Bandırma, Balıkesir merkezli, sade ve kalıcı iç mekân tasarımına odaklanan bir tasarım stüdyosu.",
  },
};

const team = [
  { name: "Deniz Kenet", role: "Kurucu Ortak, Mimar" },
  { name: "Elif Aras", role: "Ortak, Tasarım Direktörü" },
  { name: "Mert Yalın", role: "Proje Mimarı" },
  { name: "Selin Toprak", role: "İç Mimar" },
];

export default function StudioPage() {
  return (
    <div>
      <div className="mx-auto max-w-[1600px] px-6 pt-36 pb-16 md:px-10 md:pt-48">
        <p className="eyebrow text-muted-foreground">Hakkımızda</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] font-light md:text-7xl">
          2009’dan bu yana; sade, dayanıklı ve zamansız iç mekânlar.
        </h1>
      </div>

      <Image
        src={studio}
        alt="Kenet Mimarlık iç mimari stüdyosunda malzeme örnekleri ve çizimler"
        width={1400}
        height={1000}
        sizes="100vw"
        className="h-[50dvh] w-full object-cover md:h-[70dvh]"
      />

      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-24 md:grid-cols-[1fr_1.4fr] md:px-10">
        <p className="eyebrow text-muted-foreground">Felsefe</p>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            İç mimariyi bir gösteri değil, bir düzenleme pratiği olarak görüyoruz. Her projede
            mekânın ölçeği, ışığı ve kullanıcının günlük ritmi başlangıç noktamız.
          </p>
          <p>
            Sınırlı bir malzeme paletiyle çalışıyoruz: doğal ahşap, taş, tekstil ve metal. Detay,
            yalnızca gerektiği yerde görünür olur; geri kalanı ışığa bırakılır.
          </p>
          <p>
            Konsept, uygulama projesi ve şantiye takibini tek bir ekiple yürütüyoruz. Bu bütünlük,
            tasarımın yaşanılan halinde de korunmasını sağlıyor.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10">
          <h2 className="font-display text-4xl font-light md:text-6xl">Ekip</h2>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="border-t border-border pt-5">
                <p className="font-display text-2xl font-light">{m.name}</p>
                <p className="mt-2 eyebrow text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Image
        src={detail1}
        alt="Mimari yüzey ve gölge detayı"
        width={1400}
        height={1000}
        sizes="100vw"
        className="h-[40dvh] w-full object-cover md:h-[60dvh]"
      />
    </div>
  );
}
