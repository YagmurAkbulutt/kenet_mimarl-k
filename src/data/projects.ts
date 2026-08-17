import type { StaticImageData } from "next/image";

export type GalleryItem = {
  src: StaticImageData | string;
  caption: string;
  room?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  area: string;
  client: string;
  status: string;
  cover: StaticImageData | string;
  summary: string;
  description: string[];
  gallery: GalleryItem[];
};

export const projects: Project[] = [
  {
    slug: "m-k-evi",
    title: "M-K Evi",
    category: "Konut İç Mekân",
    location: "Bandırma, Balıkesir",
    area: "320 m²",
    client: "Özel",
    status: "Tamamlandı",
    cover: "/m-k/salon/image00001.webp",
    summary: "Sıcak meşe dokuları, kavisli formlar ve alan bazlı özel iç mekân kurgusuyla tasarlanan villa projesi.",
    description: [
      "M-K Evi; salon, mutfak, oturma odası, yatak odası, koridor ve balkon dâhil tüm yaşam alanlarının bütüncül bir tasarım diliyle ele alındığı özel bir konut projesidir.",
      "Doğal ışığı maksimum düzeyde alan geniş cam yüzeyler, alçak profilli özel oturma grupları ve pirinç detaylar mekâna ferah ve dingin bir hava katmaktadır. Her odada fonksiyonellik ve estetik mükemmel bir dengeyle buluşturulmuştur.",
    ],
    gallery: [
      // Salon (13)
      { src: "/m-k/salon/image00001.webp", caption: "Ana Salon Genel Görünüm", room: "Salon" },
      { src: "/m-k/salon/image00004.webp", caption: "Oturma Alanı ve Manzara Açısı", room: "Salon" },
      { src: "/m-k/salon/image00010.webp", caption: "Salon Mobilya ve Doku Detayı", room: "Salon" },
      { src: "/m-k/salon/image00011.webp", caption: "TV Duvarı ve Gizli Aydınlatma", room: "Salon" },
      { src: "/m-k/salon/image00012.webp", caption: "Salon Perspektifi", room: "Salon" },
      { src: "/m-k/salon/image00015.webp", caption: "Sehpa ve Aksesuar Detayı", room: "Salon" },
      { src: "/m-k/salon/image00019.webp", caption: "Şömine ve Koltuk Köşesi", room: "Salon" },
      { src: "/m-k/salon/image00021.webp", caption: "Gün Işığında Salon Düzeni", room: "Salon" },
      { src: "/m-k/salon/image00026.webp", caption: "Yemek Alanı Geçişi", room: "Salon" },
      { src: "/m-k/salon/image00027.webp", caption: "Salon Köşe Arayüzü", room: "Salon" },
      { src: "/m-k/salon/image00030.webp", caption: "Aydınlatma ve Tavan Detayı", room: "Salon" },
      { src: "/m-k/salon/image00031.webp", caption: "Geniş Salon Açısı", room: "Salon" },
      { src: "/m-k/salon/image00033.webp", caption: "Salon Panoramik Bakış", room: "Salon" },

      // Mutfak (4)
      { src: "/m-k/mutfak/image00082.webp", caption: "Ada Mutfak Genel Görünümü", room: "Mutfak" },
      { src: "/m-k/mutfak/image00083.webp", caption: "Tezgah ve Mermer Detayı", room: "Mutfak" },
      { src: "/m-k/mutfak/image00084.webp", caption: "Dolap ve Ankastre Tasarımı", room: "Mutfak" },
      { src: "/m-k/mutfak/image00089.webp", caption: "Mutfak Yemek ve Hazırlık Alanı", room: "Mutfak" },

      // Oturma Odası (4)
      { src: "/m-k/oturma_odasi/image00066.webp", caption: "Oturma Odası Dinlenme Alanı", room: "Oturma Odası" },
      { src: "/m-k/oturma_odasi/image00068.webp", caption: "TV Köşesi ve Kitaplık", room: "Oturma Odası" },
      { src: "/m-k/oturma_odasi/image00070.webp", caption: "Koltuk ve Tekstil Detayı", room: "Oturma Odası" },
      { src: "/m-k/oturma_odasi/image00071.webp", caption: "Oturma Odası Atmosferi", room: "Oturma Odası" },

      // Yatak Odası (10)
      { src: "/m-k/yatak_odasi/image00041.webp", caption: "Ebeveyn Yatak Odası Başucu", room: "Yatak Odası" },
      { src: "/m-k/yatak_odasi/image00043.webp", caption: "Yatak Odası Genel Açısı", room: "Yatak Odası" },
      { src: "/m-k/yatak_odasi/image00045.webp", caption: "Gardırop ve Soyunma Alanı", room: "Yatak Odası" },
      { src: "/m-k/yatak_odasi/image00047.webp", caption: "Makyaj Masası ve Ahşap Paneller", room: "Yatak Odası" },
      { src: "/m-k/yatak_odasi/image00048.webp", caption: "Aydınlatma ve Komodin Detayı", room: "Yatak Odası" },
      { src: "/m-k/yatak_odasi/image00050.webp", caption: "Yatak Odası Tekstil Doku Detayı", room: "Yatak Odası" },
      { src: "/m-k/yatak_odasi/image00051.webp", caption: "Pencere Önü Dinlenme Odaklı Bakış", room: "Yatak Odası" },
      { src: "/m-k/yatak_odasi/image00057.webp", caption: "Oda Girişi Perspektifi", room: "Yatak Odası" },
      { src: "/m-k/yatak_odasi/image00061.webp", caption: "Gizli Işık ve Duvar Kaplaması", room: "Yatak Odası" },
      { src: "/m-k/yatak_odasi/image00064.webp", caption: "Yatak Odası Derinlik Açısı", room: "Yatak Odası" },

      // Koridor (2)
      { src: "/m-k/koridor/image00095.webp", caption: "Giriş Holü ve Galeri Boşluğu", room: "Koridor" },
      { src: "/m-k/koridor/image00096.webp", caption: "Koridor Ahşap Çıta ve Kapı Detayları", room: "Koridor" },

      // Balkon (2)
      { src: "/m-k/balkon/image00091.webp", caption: "Balkon Oturma Grubu", room: "Balkon" },
      { src: "/m-k/balkon/image00092.webp", caption: "Dış Mekân Açık Hava Alanı", room: "Balkon" },
    ],
  },
  {
    slug: "s-m-evi",
    title: "S-M Evi",
    category: "Konut İç Mekân",
    location: "Bandırma, Balıkesir",
    area: "240 m²",
    client: "Özel",
    status: "Tamamlandı",
    cover: "/s-m/salon/image00023.webp",
    summary: "Yalın çizgiler, ferah salon ve modern mutfak kurgusuyla öne çıkan konut tasarımı.",
    description: [
      "S-M Evi, odağında salon ve mutfak yaşam alanlarının bulunduğu, modern çizgiler ve zamansız detaylarla tasarlanmış bir konut projesidir.",
      "Fonksiyonel depolama çözümleri, mermer ve lake yüzey kombinasyonları ve özel aydınlatma tasarımlarıyla mekân kalitesi maksimuma çıkarılmıştır.",
    ],
    gallery: [
      // Salon (13)
      { src: "/s-m/salon/image00001.webp", caption: "Salon Ana Görünüm", room: "Salon" },
      { src: "/s-m/salon/image00003.webp", caption: "Oturma Grubu ve Orta Sehpa", room: "Salon" },
      { src: "/s-m/salon/image00005.webp", caption: "TV Ünitesi ve Kitaplık Detayı", room: "Salon" },
      { src: "/s-m/salon/image00006.webp", caption: "Yemek Masası Kurgusu", room: "Salon" },
      { src: "/s-m/salon/image00009.webp", caption: "Salon Gün Işığı Açısı", room: "Salon" },
      { src: "/s-m/salon/image00011.webp", caption: "Duvar Panelleri ve Aydınlatma", room: "Salon" },
      { src: "/s-m/salon/image00014.webp", caption: "Koltuk Detay Bakışı", room: "Salon" },
      { src: "/s-m/salon/image00015.webp", caption: "Salon ve Yemek Alanı Bütünlüğü", room: "Salon" },
      { src: "/s-m/salon/image00016.webp", caption: "Pencere Cephesi Bakışı", room: "Salon" },
      { src: "/s-m/salon/image00019.webp", caption: "Salon Derinlik Perspektifi", room: "Salon" },
      { src: "/s-m/salon/image00021.webp", caption: "Şık Aksesuar ve Dokular", room: "Salon" },
      { src: "/s-m/salon/image00023.webp", caption: "Geniş Salon Perspektifi", room: "Salon" },
      { src: "/s-m/salon/image00024.webp", caption: "Salon Odak Noktası", room: "Salon" },

      // Mutfak (10)
      { src: "/s-m/mutfak/image00026.webp", caption: "Mutfak Genel Görünümü", room: "Mutfak" },
      { src: "/s-m/mutfak/image00028.webp", caption: "Ada Tezgah ve Sandalyeler", room: "Mutfak" },
      { src: "/s-m/mutfak/image00031.webp", caption: "Dolap Kapakları ve Ankastre", room: "Mutfak" },
      { src: "/s-m/mutfak/image00032.webp", caption: "Mermer Tezgah ve Eviye Detayı", room: "Mutfak" },
      { src: "/s-m/mutfak/image00036.webp", caption: "Mutfak Aydınlatma Tasarımı", room: "Mutfak" },
      { src: "/s-m/mutfak/image00039.webp", caption: "Kahvaltı Barı Yakın Görünüm", room: "Mutfak" },
      { src: "/s-m/mutfak/image00040.webp", caption: "Boy Dolapları ve Depolama", room: "Mutfak" },
      { src: "/s-m/mutfak/image00041.webp", caption: "Mutfak Cephe Bakışı", room: "Mutfak" },
      { src: "/s-m/mutfak/image00043.webp", caption: "Pişirme Alanı ve Tezgah Detayı", room: "Mutfak" },
      { src: "/s-m/mutfak/image00050.webp", caption: "Mutfak Açık Alan Perspektifi", room: "Mutfak" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
