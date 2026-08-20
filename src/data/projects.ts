import type { StaticImageData } from "next/image";

export type GalleryItem = {
  src: StaticImageData | string;
  caption: string;
  captionEn?: string;
  room?: string;
};

export type Project = {
  slug: string;
  title: string;
  titleEn?: string;
  category: string;
  categoryEn?: string;
  location: string;
  locationEn?: string;
  area: string;
  client: string;
  clientEn?: string;
  status: string;
  statusEn?: string;
  cover: StaticImageData | string;
  summary: string;
  summaryEn?: string;
  description: string[];
  descriptionEn?: string[];
  gallery: GalleryItem[];
};

export const projects: Project[] = [
  {
    slug: "m-e-evi",
    title: "M-E Evi",
    titleEn: "M-E House",
    category: "Konut İç Mekân",
    categoryEn: "Residential Interior",
    location: "Bandırma, Balıkesir",
    locationEn: "Bandırma, Balıkesir",
    area: "320 m²",
    client: "Özel",
    clientEn: "Private",
    status: "Tamamlandı",
    statusEn: "Completed",
    cover: "/m-e/salon/image00001.webp",
    summary: "Sıcak meşe dokuları, kavisli formlar ve alan bazlı özel iç mekân kurgusuyla tasarlanan villa projesi.",
    summaryEn: "A villa project designed with warm oak textures, curved forms, and a space-customized interior layout.",
    description: [
      "M-E Evi; salon, mutfak, oturma odası, yatak odası, koridor ve balkon dâhil tüm yaşam alanlarının bütüncül bir tasarım diliyle ele alındığı özel bir konut projesidir.",
      "Doğal ışığı maksimum düzeyde alan geniş cam yüzeyler, alçak profilli özel oturma grupları ve pirinç detaylar mekâna ferah ve dingin bir hava katmaktadır. Her odada fonksiyonellik ve estetik mükemmel bir dengeyle buluşturulmuştur.",
    ],
    descriptionEn: [
      "M-E House is a bespoke residential project where all living spaces—including living room, kitchen, lounge, bedroom, corridor, and balcony—are envisioned with a unified design language.",
      "Expansive glass surfaces capturing maximum natural light, low-profile custom seating, and brass accents infuse the space with an airy and serene atmosphere. Functionality and aesthetics are brought into perfect harmony in every room.",
    ],
    gallery: [
      // Salon (13)
      { src: "/m-e/salon/image00001.webp", caption: "Ana Salon Genel Görünüm", captionEn: "Main Living Room General View", room: "Salon" },
      { src: "/m-e/salon/image00004.webp", caption: "Oturma Alanı ve Manzara Açısı", captionEn: "Seating Area & View Perspective", room: "Salon" },
      { src: "/m-e/salon/image00010.webp", caption: "Salon Mobilya ve Doku Detayı", captionEn: "Furniture & Material Texture Detail", room: "Salon" },
      { src: "/m-e/salon/image00011.webp", caption: "TV Duvarı ve Gizli Aydınlatma", captionEn: "TV Wall & Concealed Lighting", room: "Salon" },
      { src: "/m-e/salon/image00012.webp", caption: "Salon Perspektifi", captionEn: "Living Room Perspective", room: "Salon" },
      { src: "/m-e/salon/image00015.webp", caption: "Sehpa ve Aksesuar Detayı", captionEn: "Coffee Table & Accessory Detail", room: "Salon" },
      { src: "/m-e/salon/image00019.webp", caption: "Şömine ve Koltuk Köşesi", captionEn: "Fireplace & Armchair Nook", room: "Salon" },
      { src: "/m-e/salon/image00021.webp", caption: "Gün Işığında Salon Düzeni", captionEn: "Daylight Living Room Layout", room: "Salon" },
      { src: "/m-e/salon/image00026.webp", caption: "Yemek Alanı Geçişi", captionEn: "Dining Area Transition", room: "Salon" },
      { src: "/m-e/salon/image00027.webp", caption: "Salon Köşe Arayüzü", captionEn: "Corner Interface Perspective", room: "Salon" },
      { src: "/m-e/salon/image00030.webp", caption: "Aydınlatma ve Tavan Detayı", captionEn: "Lighting & Ceiling Feature", room: "Salon" },
      { src: "/m-e/salon/image00031.webp", caption: "Geniş Salon Açısı", captionEn: "Wide Living Room Angle", room: "Salon" },
      { src: "/m-e/salon/image00033.webp", caption: "Salon Panoramik Bakış", captionEn: "Panoramic Living Room View", room: "Salon" },

      // Mutfak (4)
      { src: "/m-e/mutfak/image00082.webp", caption: "Ada Mutfak Genel Görünümü", captionEn: "Island Kitchen Overall View", room: "Mutfak" },
      { src: "/m-e/mutfak/image00083.webp", caption: "Tezgah ve Mermer Detayı", captionEn: "Countertop & Marble Detail", room: "Mutfak" },
      { src: "/m-e/mutfak/image00084.webp", caption: "Dolap ve Ankastre Tasarımı", captionEn: "Cabinetry & Built-in Appliance Design", room: "Mutfak" },
      { src: "/m-e/mutfak/image00089.webp", caption: "Mutfak Yemek ve Hazırlık Alanı", captionEn: "Kitchen Prep & Dining Zone", room: "Mutfak" },

      // Oturma Odası (4)
      { src: "/m-e/oturma_odasi/image00066.webp", caption: "Oturma Odası Dinlenme Alanı", captionEn: "Lounge Relaxation Nook", room: "Oturma Odası" },
      { src: "/m-e/oturma_odasi/image00068.webp", caption: "TV Köşesi ve Kitaplık", captionEn: "TV Nook & Bookcase", room: "Oturma Odası" },
      { src: "/m-e/oturma_odasi/image00070.webp", caption: "Koltuk ve Tekstil Detayı", captionEn: "Armchair & Textile Texture", room: "Oturma Odası" },
      { src: "/m-e/oturma_odasi/image00071.webp", caption: "Oturma Odası Atmosferi", captionEn: "Lounge Ambient Atmosphere", room: "Oturma Odası" },

      // Yatak Odası (10)
      { src: "/m-e/yatak_odasi/image00041.webp", caption: "Ebeveyn Yatak Odası Başucu", captionEn: "Master Bedroom Headboard", room: "Yatak Odası" },
      { src: "/m-e/yatak_odasi/image00043.webp", caption: "Yatak Odası Genel Açısı", captionEn: "Bedroom Overall Perspective", room: "Yatak Odası" },
      { src: "/m-e/yatak_odasi/image00045.webp", caption: "Gardırop ve Soyunma Alanı", captionEn: "Wardrobe & Dressing Zone", room: "Yatak Odası" },
      { src: "/m-e/yatak_odasi/image00047.webp", caption: "Makyaj Masası ve Ahşap Paneller", captionEn: "Vanity Table & Timber Panels", room: "Yatak Odası" },
      { src: "/m-e/yatak_odasi/image00048.webp", caption: "Aydınlatma ve Komodin Detayı", captionEn: "Lighting & Nightstand Detail", room: "Yatak Odası" },
      { src: "/m-e/yatak_odasi/image00050.webp", caption: "Yatak Odası Tekstil Doku Detayı", captionEn: "Textile Texture & Fabric Detail", room: "Yatak Odası" },
      { src: "/m-e/yatak_odasi/image00051.webp", caption: "Pencere Önü Dinlenme Odaklı Bakış", captionEn: "Window Side Relaxation Perspective", room: "Yatak Odası" },
      { src: "/m-e/yatak_odasi/image00057.webp", caption: "Oda Girişi Perspektifi", captionEn: "Bedroom Entrance View", room: "Yatak Odası" },
      { src: "/m-e/yatak_odasi/image00061.webp", caption: "Gizli Işık ve Duvar Kaplaması", captionEn: "Cove Lighting & Wall Paneling", room: "Yatak Odası" },
      { src: "/m-e/yatak_odasi/image00064.webp", caption: "Yatak Odası Derinlik Açısı", captionEn: "Depth View of Bedroom", room: "Yatak Odası" },

      // Koridor (2)
      { src: "/m-e/koridor/image00095.webp", caption: "Giriş Holü ve Galeri Boşluğu", captionEn: "Entrance Hall & Void Space", room: "Koridor" },
      { src: "/m-e/koridor/image00096.webp", caption: "Koridor Ahşap Çıta ve Kapı Detayları", captionEn: "Corridor Slatting & Door Details", room: "Koridor" },

      // Balkon (2)
      { src: "/m-e/balkon/image00091.webp", caption: "Balkon Oturma Grubu", captionEn: "Balcony Lounge Seating", room: "Balkon" },
      { src: "/m-e/balkon/image00092.webp", caption: "Dış Mekân Açık Hava Alanı", captionEn: "Outdoor Terrace Zone", room: "Balkon" },
    ],
  },
  {
    slug: "s-i-evi",
    title: "S-İ Evi",
    titleEn: "S-İ House",
    category: "Konut İç Mekân",
    categoryEn: "Residential Interior",
    location: "Bandırma, Balıkesir",
    locationEn: "Bandırma, Balıkesir",
    area: "240 m²",
    client: "Özel",
    clientEn: "Private",
    status: "Tamamlandı",
    statusEn: "Completed",
    cover: "/s-i/salon/image00023.webp",
    summary: "Yalın çizgiler, ferah salon ve modern mutfak kurgusuyla öne çıkan konut tasarımı.",
    summaryEn: "A residence highlighted by clean lines, a spacious living room, and a modern kitchen configuration.",
    description: [
      "S-İ Evi, odağında salon ve mutfak yaşam alanlarının bulunduğu, modern çizgiler ve zamansız detaylarla tasarlanmış bir konut projesidir.",
      "Fonksiyonel depolama çözümleri, mermer ve lake yüzey kombinasyonları ve özel aydınlatma tasarımlarıyla mekân kalitesi maksimuma çıkarılmıştır.",
    ],
    descriptionEn: [
      "S-İ House is a residential project focusing on the living room and kitchen environments, crafted with modern lines and timeless nuances.",
      "Spatial quality is maximized through functional storage solutions, marble and lacquer surface combinations, and custom lighting designs.",
    ],
    gallery: [
      // Salon (13)
      { src: "/s-i/salon/image00001.webp", caption: "Salon Ana Görünüm", captionEn: "Main Living Room View", room: "Salon" },
      { src: "/s-i/salon/image00003.webp", caption: "Oturma Grubu ve Orta Sehpa", captionEn: "Seating Ensemble & Center Table", room: "Salon" },
      { src: "/s-i/salon/image00005.webp", caption: "TV Ünitesi ve Kitaplık Detayı", captionEn: "TV Unit & Shelving Detail", room: "Salon" },
      { src: "/s-i/salon/image00006.webp", caption: "Yemek Masası Kurgusu", captionEn: "Dining Table Arrangement", room: "Salon" },
      { src: "/s-i/salon/image00009.webp", caption: "Salon Gün Işığı Açısı", captionEn: "Daylight Living Room Angle", room: "Salon" },
      { src: "/s-i/salon/image00011.webp", caption: "Duvar Panelleri ve Aydınlatma", captionEn: "Wall Paneling & Lighting", room: "Salon" },
      { src: "/s-i/salon/image00014.webp", caption: "Koltuk Detay Bakışı", captionEn: "Sofa Detail Perspective", room: "Salon" },
      { src: "/s-i/salon/image00015.webp", caption: "Salon ve Yemek Alanı Bütünlüğü", captionEn: "Living & Dining Continuity", room: "Salon" },
      { src: "/s-i/salon/image00016.webp", caption: "Pencere Cephesi Bakışı", captionEn: "Window Facade View", room: "Salon" },
      { src: "/s-i/salon/image00019.webp", caption: "Salon Derinlik Perspektifi", captionEn: "Living Room Depth Perspective", room: "Salon" },
      { src: "/s-i/salon/image00021.webp", caption: "Şık Aksesuar ve Dokular", captionEn: "Elegant Accessories & Textures", room: "Salon" },
      { src: "/s-i/salon/image00023.webp", caption: "Geniş Salon Perspektifi", captionEn: "Expansive Living Room Perspective", room: "Salon" },
      { src: "/s-i/salon/image00024.webp", caption: "Salon Odak Noktası", captionEn: "Living Room Focal Point", room: "Salon" },

      // Mutfak (10)
      { src: "/s-i/mutfak/image00026.webp", caption: "Mutfak Genel Görünümü", captionEn: "Overall Kitchen View", room: "Mutfak" },
      { src: "/s-i/mutfak/image00028.webp", caption: "Ada Tezgah ve Sandalyeler", captionEn: "Kitchen Island & Bar Stools", room: "Mutfak" },
      { src: "/s-i/mutfak/image00031.webp", caption: "Dolap Kapakları ve Ankastre", captionEn: "Cabinetry & Integrated Appliances", room: "Mutfak" },
      { src: "/s-i/mutfak/image00032.webp", caption: "Mermer Tezgah ve Eviye Detayı", captionEn: "Marble Countertop & Sink Detail", room: "Mutfak" },
      { src: "/s-i/mutfak/image00036.webp", caption: "Mutfak Aydınlatma Tasarımı", captionEn: "Kitchen Lighting Design", room: "Mutfak" },
      { src: "/s-i/mutfak/image00039.webp", caption: "Kahvaltı Barı Yakın Görünüm", captionEn: "Breakfast Bar Close-up", room: "Mutfak" },
      { src: "/s-i/mutfak/image00040.webp", caption: "Boy Dolapları ve Depolama", captionEn: "Tall Cabinets & Storage", room: "Mutfak" },
      { src: "/s-i/mutfak/image00041.webp", caption: "Mutfak Cephe Bakışı", captionEn: "Kitchen Elevation View", room: "Mutfak" },
      { src: "/s-i/mutfak/image00043.webp", caption: "Pişirme Alanı ve Tezgah Detayı", captionEn: "Cooking Station & Countertop Detail", room: "Mutfak" },
      { src: "/s-i/mutfak/image00050.webp", caption: "Mutfak Açık Alan Perspektifi", captionEn: "Open Kitchen Perspective", room: "Mutfak" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
