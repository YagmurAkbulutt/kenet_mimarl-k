import p1 from "@/assets/p1-color.jpg";
import p2 from "@/assets/p2-color.jpg";
import p3 from "@/assets/p3-color.jpg";
import p4 from "@/assets/p4-color.jpg";
import p5 from "@/assets/p5-color.jpg";
import p6 from "@/assets/p6-color.jpg";
import detail1 from "@/assets/detail1-color.jpg";
import studio from "@/assets/studio-color.jpg";
import type { StaticImageData } from "next/image";

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  client: string;
  status: string;
  cover: StaticImageData;
  summary: string;
  description: string[];
  gallery: { src: StaticImageData; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "villa-salonu",
    title: "Villa Salonu",
    category: "Konut İç Mekân",
    location: "Bandırma, Balıkesir",
    year: "2024",
    area: "210 m²",
    client: "Özel",
    status: "Tamamlandı",
    cover: p1,
    summary: "Deniz manzaralı, ılık tonlarda sakin bir villa yaşam alanı.",
    description: [
      "Villa Salonu, Bandırma’da yer alan özel konutun ana yaşam alanıdır. Doğal ışığı maksimum düzeyde içeri alan geniş cam yüzeyler, mekânı manzara ile bütünleştirir.",
      "Malzeme paleti doğal meşe, krem tonlu kumaşlar ve taş dokularla sınırlandırıldı. Mobilya seçiminde kavisli formlar ve alçak profilli parçalar öne çıkarak, deniz görüşünü engellemeden konforlu bir oturma düzeni kuruldu.",
    ],
    gallery: [
      { src: p1, caption: "Ana salon, öğle ışığı" },
      { src: detail1, caption: "Başucu detayı" },
      { src: p5, caption: "Oturmaya yakın detay" },
    ],
  },
  {
    slug: "mutfak-no7",
    title: "Mutfak No. 7",
    category: "Mutfak",
    location: "Bandırma, Balıkesir",
    year: "2023",
    area: "45 m²",
    client: "Özel",
    status: "Tamamlandı",
    cover: p2,
    summary: "Açık mutfak ve ada düzeniyle evin merkezine dönüşen bir pişirme alanı.",
    description: [
      "Mutfak No. 7, evin sosyal alanına tamamen açık, fonksiyonel ve estetik bir mutfak tasarımı. Ada tezgahı hem hazırlık hem kahvaltı alanı olarak kullanılabilecek şekilde genişletildi.",
      "Meşe dolaplar, beyaz mermer tezgah ve pirinç musluk detaylarıyla sıcak ama temiz bir atmosfer yaratıldı. Aydınlatma, görev ışığı ve atmosferik ışığı bir arada sunacak şekilde katmanlandırıldı.",
    ],
    gallery: [
      { src: p2, caption: "Genel mutfak görünümü" },
      { src: detail1, caption: "Malzeme detayı" },
      { src: p3, caption: "Otel süiti referansı" },
    ],
  },
  {
    slug: "otel-suiti",
    title: "Otel Süiti",
    category: "Otel",
    location: "Erdek, Balıkesir",
    year: "2025",
    area: "85 m²",
    client: "Butik Otel",
    status: "Devam ediyor",
    cover: p3,
    summary: "Lüks ve konforu dengeleyen, şehir manzaralı bir butik otel odası.",
    description: [
      "Butik otel süiti, konuklara ev konforunu otel lüksüyle birleştiren bir deneyim sunuyor. Yatak başlığı, gizli aydınlatma ve yumuşak dokularla odanın odak noktası oluşturuldu.",
      "Banyo alanı cam bölücülerle yatak odasına görsel olarak bağlandı; mermer ve bronz detaylar sadeliği zenginleştirdi. Tüm seçimler, misafirlerin kendilerini özel hissetmesi üzerine kurulu.",
    ],
    gallery: [
      { src: p3, caption: "Ana yatak odası" },
      { src: p5, caption: "Penthouse referansı" },
      { src: detail1, caption: "Tekstil detayı" },
    ],
  },
  {
    slug: "yonetici-ofisi",
    title: "Yönetici Ofisi",
    category: "Ofis",
    location: "Bandırma, Balıkesir",
    year: "2022",
    area: "60 m²",
    client: "Kenet Yatırım",
    status: "Tamamlandı",
    cover: p4,
    summary: "Otoriteyi şıklıkla birleştiren, koyu tonlarda bir yönetim ofisi.",
    description: [
      "Yönetici ofisi, koyu ahşap panolar, deri döşeme ve pirinç aydınlatmayla güçlü ama davetkar bir karakter kazandı. Tam boy kitaplık duvarı, hem depolama hem görsel bir zemin görevi görüyor.",
      "Masa düzeni, pencereye paralel konumlandırılarak doğal ışık çalışma yüzeyine yansıtıldı. Misafir koltuğu ve lounge köşesi, görüşmeler için resmi olmayan bir alan sağlıyor.",
    ],
    gallery: [
      { src: p4, caption: "Masa cephesi" },
      { src: detail1, caption: "Malzeme detayı" },
      { src: p2, caption: "Mutfak referansı" },
    ],
  },
  {
    slug: "penthouse-loft",
    title: "Penthouse Loft",
    category: "Penthouse",
    location: "Bandırma, Balıkesir",
    year: "2024",
    area: "310 m²",
    client: "Özel",
    status: "Tamamlandı",
    cover: p5,
    summary: "Çift katlı salonu ve panoramik şehir manzarasıyla lüks bir iç mekân.",
    description: [
      "Penthouse Loft, şehir siluetini çerçeveleyen çift katlı bir yaşam alanı. Yüksek tavan, büyük ölçekli sanat eseri ve şömine, salonun dramatik ama sıcak atmosferini belirliyor.",
      "Zemin katında oturma ve yemek alanı, üst katta özel çalışma köşesi yer alıyor. Aydınlatma tavan ve duvar boyunca sürekli bir LED şerit ile gece de manzaraya eşlik ediyor.",
    ],
    gallery: [
      { src: p5, caption: "Çift katlı salon" },
      { src: p3, caption: "Otel süiti referansı" },
      { src: detail1, caption: "Marble detayı" },
    ],
  },
  {
    slug: "butik-magaza",
    title: "Butik Mağaza",
    category: "Ticari",
    location: "Erdek, Balıkesir",
    year: "2023",
    area: "160 m²",
    client: "Kenet Mimarlık",
    status: "Tamamlandı",
    cover: p6,
    summary: "Yumuşak tonlar ve niş aydınlatmayla sakin bir alışveriş deneyimi.",
    description: [
      "Butik mağaza, ürünleri ön plana çıkaran sade bir zemin ve özenle yerleştirilen ışık noktaları tasarlandı. Krem rengi duvarlar, taş dokulu köşeler ve kavisli pasajlar mekâna butik bir his kattı.",
      "Giyim askıları, mermer tezgahlar ve oturma alanları, alışverişi deneyime dönüştürmek için planlandı. Zemindeki mat beton görünüm, sıcak dokularla dengelendi.",
    ],
    gallery: [
      { src: p6, caption: "Mağaza genel görünüm" },
      { src: studio, caption: "Tasarım süreci" },
      { src: detail1, caption: "Tezgah detayı" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
