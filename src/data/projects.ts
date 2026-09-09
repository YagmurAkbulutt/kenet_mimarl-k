import type { StaticImageData } from "next/image";

export type GalleryItem = {
  src: StaticImageData | string;
  caption: string;
  captionEn?: string;
  room?: string;
  aspectRatio?: "portrait" | "landscape";
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
      { src: "/m-e/salon/image00001.webp", caption: "Ana Salon Genel Görünüm", captionEn: "Main Living Room General View", room: "Salon", aspectRatio: "landscape" },
      { src: "/m-e/salon/image00004.webp", caption: "Oturma Alanı ve Manzara Açısı", captionEn: "Seating Area & View Perspective", room: "Salon", aspectRatio: "portrait" },
      { src: "/m-e/salon/image00010.webp", caption: "Salon Mobilya ve Doku Detayı", captionEn: "Furniture & Material Texture Detail", room: "Salon", aspectRatio: "portrait" },
      { src: "/m-e/salon/image00011.webp", caption: "TV Duvarı ve Gizli Aydınlatma", captionEn: "TV Wall & Concealed Lighting", room: "Salon", aspectRatio: "portrait" },
      { src: "/m-e/salon/image00012.webp", caption: "Salon Perspektifi", captionEn: "Living Room Perspective", room: "Salon", aspectRatio: "portrait" },
      { src: "/m-e/salon/image00015.webp", caption: "Sehpa ve Aksesuar Detayı", captionEn: "Coffee Table & Accessory Detail", room: "Salon", aspectRatio: "portrait" },
      { src: "/m-e/salon/image00019.webp", caption: "Şömine ve Koltuk Köşesi", captionEn: "Fireplace & Armchair Nook", room: "Salon", aspectRatio: "portrait" },
      { src: "/m-e/salon/image00021.webp", caption: "Gün Işığında Salon Düzeni", captionEn: "Daylight Living Room Layout", room: "Salon", aspectRatio: "portrait" },
      { src: "/m-e/salon/image00026.webp", caption: "Yemek Alanı Geçişi", captionEn: "Dining Area Transition", room: "Salon", aspectRatio: "landscape" },
      { src: "/m-e/salon/image00027.webp", caption: "Salon Köşe Arayüzü", captionEn: "Corner Interface Perspective", room: "Salon", aspectRatio: "portrait" },
      { src: "/m-e/salon/image00030.webp", caption: "Aydınlatma ve Tavan Detayı", captionEn: "Lighting & Ceiling Feature", room: "Salon", aspectRatio: "portrait" },
      { src: "/m-e/salon/image00031.webp", caption: "Geniş Salon Açısı", captionEn: "Wide Living Room Angle", room: "Salon", aspectRatio: "portrait" },
      { src: "/m-e/salon/image00033.webp", caption: "Salon Panoramik Bakış", captionEn: "Panoramic Living Room View", room: "Salon", aspectRatio: "portrait" },

      // Mutfak (4)
      { src: "/m-e/mutfak/image00082.webp", caption: "Ada Mutfak Genel Görünümü", captionEn: "Island Kitchen Overall View", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/m-e/mutfak/image00083.webp", caption: "Tezgah ve Mermer Detayı", captionEn: "Countertop & Marble Detail", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/m-e/mutfak/image00084.webp", caption: "Dolap ve Ankastre Tasarımı", captionEn: "Cabinetry & Built-in Appliance Design", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/m-e/mutfak/image00089.webp", caption: "Mutfak Yemek ve Hazırlık Alanı", captionEn: "Kitchen Prep & Dining Zone", room: "Mutfak", aspectRatio: "landscape" },

      // Oturma Odası (4)
      { src: "/m-e/oturma_odasi/image00066.webp", caption: "Oturma Odası Dinlenme Alanı", captionEn: "Lounge Relaxation Nook", room: "Oturma Odası", aspectRatio: "portrait" },
      { src: "/m-e/oturma_odasi/image00068.webp", caption: "TV Köşesi ve Kitaplık", captionEn: "TV Nook & Bookcase", room: "Oturma Odası", aspectRatio: "portrait" },
      { src: "/m-e/oturma_odasi/image00070.webp", caption: "Koltuk ve Tekstil Detayı", captionEn: "Armchair & Textile Texture", room: "Oturma Odası", aspectRatio: "portrait" },
      { src: "/m-e/oturma_odasi/image00071.webp", caption: "Oturma Odası Atmosferi", captionEn: "Lounge Ambient Atmosphere", room: "Oturma Odası", aspectRatio: "landscape" },

      // Yatak Odası (10)
      { src: "/m-e/yatak_odasi/image00041.webp", caption: "Ebeveyn Yatak Odası Başucu", captionEn: "Master Bedroom Headboard", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/m-e/yatak_odasi/image00043.webp", caption: "Yatak Odası Genel Açısı", captionEn: "Bedroom Overall Perspective", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/m-e/yatak_odasi/image00045.webp", caption: "Gardırop ve Soyunma Alanı", captionEn: "Wardrobe & Dressing Zone", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/m-e/yatak_odasi/image00047.webp", caption: "Makyaj Masası ve Ahşap Paneller", captionEn: "Vanity Table & Timber Panels", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/m-e/yatak_odasi/image00048.webp", caption: "Aydınlatma ve Komodin Detayı", captionEn: "Lighting & Nightstand Detail", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/m-e/yatak_odasi/image00050.webp", caption: "Yatak Odası Tekstil Doku Detayı", captionEn: "Textile Texture & Fabric Detail", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/m-e/yatak_odasi/image00051.webp", caption: "Pencere Önü Dinlenme Odaklı Bakış", captionEn: "Window Side Relaxation Perspective", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/m-e/yatak_odasi/image00057.webp", caption: "Oda Girişi Perspektifi", captionEn: "Bedroom Entrance View", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/m-e/yatak_odasi/image00061.webp", caption: "Gizli Işık ve Duvar Kaplaması", captionEn: "Cove Lighting & Wall Paneling", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/m-e/yatak_odasi/image00064.webp", caption: "Yatak Odası Derinlik Açısı", captionEn: "Depth View of Bedroom", room: "Yatak Odası", aspectRatio: "portrait" },

      // Koridor (2)
      { src: "/m-e/koridor/image00095.webp", caption: "Giriş Holü ve Galeri Boşluğu", captionEn: "Entrance Hall & Void Space", room: "Koridor", aspectRatio: "portrait" },
      { src: "/m-e/koridor/image00096.webp", caption: "Koridor Ahşap Çıta ve Kapı Detayları", captionEn: "Corridor Slatting & Door Details", room: "Koridor", aspectRatio: "portrait" },

      // Balkon (2)
      { src: "/m-e/balkon/image00091.webp", caption: "Balkon Oturma Grubu", captionEn: "Balcony Lounge Seating", room: "Balkon", aspectRatio: "portrait" },
      { src: "/m-e/balkon/image00092.webp", caption: "Dış Mekân Açık Hava Alanı", captionEn: "Outdoor Terrace Zone", room: "Balkon", aspectRatio: "portrait" },
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
      { src: "/s-i/salon/image00001.webp", caption: "Salon Ana Görünüm", captionEn: "Main Living Room View", room: "Salon", aspectRatio: "portrait" },
      { src: "/s-i/salon/image00003.webp", caption: "Oturma Grubu ve Orta Sehpa", captionEn: "Seating Ensemble & Center Table", room: "Salon", aspectRatio: "portrait" },
      { src: "/s-i/salon/image00005.webp", caption: "TV Ünitesi ve Kitaplık Detayı", captionEn: "TV Unit & Shelving Detail", room: "Salon", aspectRatio: "portrait" },
      { src: "/s-i/salon/image00006.webp", caption: "Yemek Masası Kurgusu", captionEn: "Dining Table Arrangement", room: "Salon", aspectRatio: "portrait" },
      { src: "/s-i/salon/image00009.webp", caption: "Salon Gün Işığı Açısı", captionEn: "Daylight Living Room Angle", room: "Salon", aspectRatio: "landscape" },
      { src: "/s-i/salon/image00011.webp", caption: "Duvar Panelleri ve Aydınlatma", captionEn: "Wall Paneling & Lighting", room: "Salon", aspectRatio: "portrait" },
      { src: "/s-i/salon/image00014.webp", caption: "Koltuk Detay Bakışı", captionEn: "Sofa Detail Perspective", room: "Salon", aspectRatio: "portrait" },
      { src: "/s-i/salon/image00015.webp", caption: "Salon ve Yemek Alanı Bütünlüğü", captionEn: "Living & Dining Continuity", room: "Salon", aspectRatio: "portrait" },
      { src: "/s-i/salon/image00016.webp", caption: "Pencere Cephesi Bakışı", captionEn: "Window Facade View", room: "Salon", aspectRatio: "landscape" },
      { src: "/s-i/salon/image00019.webp", caption: "Salon Derinlik Perspektifi", captionEn: "Living Room Depth Perspective", room: "Salon", aspectRatio: "landscape" },
      { src: "/s-i/salon/image00021.webp", caption: "Şık Aksesuar ve Dokular", captionEn: "Elegant Accessories & Textures", room: "Salon", aspectRatio: "landscape" },
      { src: "/s-i/salon/image00023.webp", caption: "Geniş Salon Perspektifi", captionEn: "Expansive Living Room Perspective", room: "Salon", aspectRatio: "portrait" },
      { src: "/s-i/salon/image00024.webp", caption: "Salon Odak Noktası", captionEn: "Living Room Focal Point", room: "Salon", aspectRatio: "portrait" },

      // Mutfak (10)
      { src: "/s-i/mutfak/image00026.webp", caption: "Mutfak Genel Görünümü", captionEn: "Overall Kitchen View", room: "Mutfak", aspectRatio: "landscape" },
      { src: "/s-i/mutfak/image00028.webp", caption: "Ada Tezgah ve Sandalyeler", captionEn: "Kitchen Island & Bar Stools", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/s-i/mutfak/image00031.webp", caption: "Dolap Kapakları ve Ankastre", captionEn: "Cabinetry & Integrated Appliances", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/s-i/mutfak/image00032.webp", caption: "Mermer Tezgah ve Eviye Detayı", captionEn: "Marble Countertop & Sink Detail", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/s-i/mutfak/image00036.webp", caption: "Mutfak Aydınlatma Tasarımı", captionEn: "Kitchen Lighting Design", room: "Mutfak", aspectRatio: "landscape" },
      { src: "/s-i/mutfak/image00039.webp", caption: "Kahvaltı Barı Yakın Görünüm", captionEn: "Breakfast Bar Close-up", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/s-i/mutfak/image00040.webp", caption: "Boy Dolapları ve Depolama", captionEn: "Tall Cabinets & Storage", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/s-i/mutfak/image00041.webp", caption: "Mutfak Cephe Bakışı", captionEn: "Kitchen Elevation View", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/s-i/mutfak/image00043.webp", caption: "Pişirme Alanı ve Tezgah Detayı", captionEn: "Cooking Station & Countertop Detail", room: "Mutfak", aspectRatio: "landscape" },
      { src: "/s-i/mutfak/image00050.webp", caption: "Mutfak Açık Alan Perspektifi", captionEn: "Open Kitchen Perspective", room: "Mutfak", aspectRatio: "portrait" },
    ],
  },
  {
    slug: "g-h-evi",
    title: "G-H Evi",
    titleEn: "G-H House",
    category: "Konut İç Mekân",
    categoryEn: "Residential Interior",
    location: "Bandırma, Balıkesir",
    locationEn: "Bandırma, Balıkesir",
    area: "280 m²",
    client: "Özel",
    clientEn: "Private",
    status: "Tamamlandı",
    statusEn: "Completed",
    cover: "/g-h/teras/22.webp",
    summary: "Zarif renk paleti, fonksiyonel oda kurguları ve nitelikli ahşap-mermer dokularıyla tasarlanan modern konut projesi.",
    summaryEn: "A modern residential project designed with an elegant color palette, functional room configurations, and refined wood-marble textures.",
    description: [
      "G-H Evi; salon, yemek alanı, mutfak, teras ve koridor dâhil tüm yaşam alanlarının birbiriyle entegre bir mimari dille kurgulandığı özel bir konut projesidir.",
      "Mekânda tercih edilen pastel tonlar, gizli aydınlatmalar ve özel imalat ahşap detaylar, hem estetik hem de yüksek konforlu bir yaşam alanı sunmaktadır.",
    ],
    descriptionEn: [
      "G-H House is a tailored residential project where all living environments—including living room, dining area, kitchen, terrace, and hallways—are arranged in an integrated architectural dialogue.",
      "Pastel tones, concealed lighting features, and bespoke woodwork elevate the spatial quality, delivering both aesthetic sophistication and high living comfort.",
    ],
    gallery: [
      // Salon (5)
      { src: "/g-h/salon/image00001.webp", caption: "Salon Ana Görünüm", captionEn: "Main Living Room View", room: "Salon", aspectRatio: "portrait" },
      { src: "/g-h/salon/image00002.webp", caption: "TV Ünitesi ve Koltuk Kurgusu", captionEn: "TV Unit & Sofa Layout", room: "Salon", aspectRatio: "portrait" },
      { src: "/g-h/salon/image00005.webp", caption: "Salon Kitaplık ve Aydınlatma", captionEn: "Living Room Bookshelf & Lighting", room: "Salon", aspectRatio: "portrait" },
      { src: "/g-h/salon/image00006.webp", caption: "Salon Dinlenme Alanı", captionEn: "Living Room Seating Corner", room: "Salon", aspectRatio: "portrait" },
      { src: "/g-h/salon/image00007.webp", caption: "Salon Gün Işığı Açısı", captionEn: "Living Room Daylight Angle", room: "Salon", aspectRatio: "portrait" },

      // Teras (11)
      { src: "/g-h/teras/22.webp", caption: "Teras Ana Görünüm", captionEn: "Main Terrace View", room: "Teras", aspectRatio: "portrait" },
      { src: "/g-h/teras/24.webp", caption: "Oturma Grubu ve Aydınlatma Detayı", captionEn: "Terrace Seating & Lighting Detail", room: "Teras", aspectRatio: "portrait" },
      { src: "/g-h/teras/25.webp", caption: "TV Ünitesi ve Raf Kurgusu", captionEn: "TV Unit & Shelving Layout", room: "Teras", aspectRatio: "portrait" },
      { src: "/g-h/teras/26.webp", caption: "Teras Genel Perspektifi", captionEn: "Terrace Overall Perspective", room: "Teras", aspectRatio: "portrait" },
      { src: "/g-h/teras/27.webp", caption: "Koltuk ve Sehpa Detayı", captionEn: "Sofa & Coffee Table Detail", room: "Teras", aspectRatio: "portrait" },
      { src: "/g-h/teras/28.webp", caption: "Doku ve Malzeme Detayı", captionEn: "Texture & Material Detail", room: "Teras", aspectRatio: "portrait" },
      { src: "/g-h/teras/29.webp", caption: "Pencere Önü Dinlenme Alanı", captionEn: "Window Side Terrace Nook", room: "Teras", aspectRatio: "portrait" },
      { src: "/g-h/teras/33.webp", caption: "Teras Köşe Açısı", captionEn: "Terrace Corner Angle", room: "Teras", aspectRatio: "portrait" },
      { src: "/g-h/teras/34.webp", caption: "Geniş Teras Açısı", captionEn: "Wide Terrace Angle", room: "Teras", aspectRatio: "portrait" },
      { src: "/g-h/teras/37.webp", caption: "Teras Gün Işığı Bakışı", captionEn: "Terrace Daylight View", room: "Teras", aspectRatio: "portrait" },
      { src: "/g-h/teras/42.webp", caption: "Teras Detay Görünümü", captionEn: "Terrace Detail View", room: "Teras", aspectRatio: "portrait" },

      // Yemek Alanı (4)
      { src: "/g-h/yemek_alani/38.webp", caption: "Yemek Masası ve Sandalyeler", captionEn: "Dining Table & Chairs", room: "Yemek Alanı", aspectRatio: "portrait" },
      { src: "/g-h/yemek_alani/39.webp", caption: "Yemek Alanı Aydınlatma Tasarımı", captionEn: "Dining Area Lighting Design", room: "Yemek Alanı", aspectRatio: "portrait" },
      { src: "/g-h/yemek_alani/40.webp", caption: "Yemek Masası Odak Noktası", captionEn: "Dining Table Focal Point", room: "Yemek Alanı", aspectRatio: "portrait" },
      { src: "/g-h/yemek_alani/41.webp", caption: "Yemek Geçiş Açısı", captionEn: "Dining Transition Angle", room: "Yemek Alanı", aspectRatio: "portrait" },

      // Mutfak (18)
      { src: "/g-h/mutfak/image00017.webp", caption: "Mutfak Genel Görünümü", captionEn: "Overall Kitchen View", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/g-h/mutfak/image00018.webp", caption: "Mutfak Ada Tezgah Tasarımı", captionEn: "Island Counter Design", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/g-h/mutfak/image00019.webp", caption: "Mutfak Dolapları ve Ankastre", captionEn: "Kitchen Cabinets & Built-ins", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/g-h/mutfak/image00020.webp", caption: "Tezgah Detayı ve Malzeme Dokusu", captionEn: "Countertop Detail & Texture", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/g-h/mutfak/image00021.webp", caption: "Mutfak Depolama Çözümleri", captionEn: "Kitchen Storage Solutions", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/g-h/mutfak/image00022.webp", caption: "Mutfak Aydınlatma Kurgusu", captionEn: "Kitchen Lighting Concept", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/g-h/mutfak/image00023.webp", caption: "Mutfak Perspektif Açısı", captionEn: "Kitchen Perspective Angle", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/g-h/mutfak/image00026.webp", caption: "Mutfak Çalışma Alanı", captionEn: "Kitchen Prep Zone", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/g-h/mutfak/image00027.webp", caption: "Boy Dolaplar ve Kahve Köşesi", captionEn: "Tall Cabinets & Coffee Nook", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/g-h/mutfak/image00028.webp", caption: "Mutfak İç Mekân Atmosferi", captionEn: "Kitchen Interior Atmosphere", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/g-h/mutfak/image00029.webp", caption: "Evye ve Musluk Detayı", captionEn: "Sink & Faucet Detail", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/g-h/mutfak/image00030.webp", caption: "Geniş Mutfak Perspektifi", captionEn: "Wide Kitchen Perspective", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/g-h/mutfak/image00032.webp", caption: "Mutfak Tezgah Üstü Aydınlatma", captionEn: "Under-cabinet Lighting", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/g-h/mutfak/image00033.webp", caption: "Mutfak Bar Sandalyeleri", captionEn: "Kitchen Bar Stools", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/g-h/mutfak/image00037.webp", caption: "Mutfak Köşe Detayı", captionEn: "Kitchen Corner Detail", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/g-h/mutfak/image00038.webp", caption: "Mutfak Ahşap ve Mermer Uyumu", captionEn: "Wood & Marble Harmony", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/g-h/mutfak/image00041.webp", caption: "Mutfak Panel ve Kapak Detayı", captionEn: "Panel & Cabinet Door Detail", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/g-h/mutfak/image00042.webp", caption: "Mutfak Açık Alan Bakışı", captionEn: "Open Kitchen View", room: "Mutfak", aspectRatio: "portrait" },

      // Koridor (13)
      { src: "/g-h/koridor/1.webp", caption: "Giriş Holü ve Portmanto", captionEn: "Entrance Hall & Coat Closet", room: "Koridor", aspectRatio: "portrait" },
      { src: "/g-h/koridor/3.webp", caption: "Koridor Aydınlatma ve Ayna Detayı", captionEn: "Corridor Lighting & Mirror Detail", room: "Koridor", aspectRatio: "portrait" },
      { src: "/g-h/koridor/4.webp", caption: "Giriş Holü Perspektifi", captionEn: "Entrance Hall Perspective", room: "Koridor", aspectRatio: "portrait" },
      { src: "/g-h/koridor/7.webp", caption: "Koridor Kapı ve Panel Detayları", captionEn: "Door & Panel Details", room: "Koridor", aspectRatio: "portrait" },
      { src: "/g-h/koridor/9.webp", caption: "Koridor Odalar Arası Geçiş", captionEn: "Corridor Room Transition", room: "Koridor", aspectRatio: "portrait" },
      { src: "/g-h/koridor/10.webp", caption: "Koridor Ahşap Çıta Uygulaması", captionEn: "Corridor Timber Slat Feature", room: "Koridor", aspectRatio: "portrait" },
      { src: "/g-h/koridor/12.webp", caption: "Giriş Konsol ve Dekorasyon", captionEn: "Entrance Console & Decor", room: "Koridor", aspectRatio: "portrait" },
      { src: "/g-h/koridor/13.webp", caption: "Koridor Geniş Açı Bakışı", captionEn: "Wide Corridor View", room: "Koridor", aspectRatio: "portrait" },
      { src: "/g-h/koridor/17.webp", caption: "Koridor Tavan Işıklandırması", captionEn: "Corridor Ceiling Lighting", room: "Koridor", aspectRatio: "portrait" },
      { src: "/g-h/koridor/20.webp", caption: "Giriş Holü Ayna ve Doku", captionEn: "Entrance Mirror & Texture", room: "Koridor", aspectRatio: "portrait" },
      { src: "/g-h/koridor/21.webp", caption: "Koridor Zemin Malzemesi ve Detayı", captionEn: "Corridor Flooring & Detail", room: "Koridor", aspectRatio: "portrait" },
      { src: "/g-h/koridor/image00011.webp", caption: "Koridor Derinlik Perspektifi", captionEn: "Corridor Depth Perspective", room: "Koridor", aspectRatio: "portrait" },
      { src: "/g-h/koridor/image00013.webp", caption: "Koridor Odak Görünümü", captionEn: "Corridor Focal View", room: "Koridor", aspectRatio: "portrait" },
    ],
  },
  {
    slug: "i-s-evi",
    title: "İ-S Evi",
    titleEn: "İ-S House",
    category: "Konut İç Mekân",
    categoryEn: "Residential Interior",
    location: "Bandırma, Balıkesir",
    locationEn: "Bandırma, Balıkesir",
    area: "310 m²",
    client: "Özel",
    clientEn: "Private",
    status: "Tamamlandı",
    statusEn: "Completed",
    cover: "/i-s/oturma_odasi/image05919.webp",
    summary: "Salon, mutfak, yatak odası ve banyoda zamansız malzeme seçimleri ve konfor odaklı çözümler sunan özel konut projesi.",
    summaryEn: "A bespoke residential project offering timeless material selections and comfort-focused solutions across living areas, kitchen, bedrooms, and bathrooms.",
    description: [
      "İ-S Evi; salon, mutfak, oturma odası, ebeveyn yatak odası, banyo ve koridor alanlarının çağdaş mimari çizgilerle yeniden yorumlandığı kapsamlı bir konut projesidir.",
      "Ahşap sıcaklığının mermer şıklığıyla harmanlandığı tasarımda, her bir mekân için özel ölçü mobilya imalatı yapılmış ve aydınlatma detayları ile atmosfer zenginleştirilmiştir.",
    ],
    descriptionEn: [
      "İ-S House is a comprehensive residential project where the living room, kitchen, lounge, master bedroom, bathroom, and hallways are reinterpreted with contemporary architectural sensibilities.",
      "Blending the warmth of timber with the elegance of marble, bespoke cabinetry and tailored lighting features enrich the serene ambiance throughout every space.",
    ],
    gallery: [
      // Salon (15)
      { src: "/i-s/salon/image00001.webp", caption: "Salon Ana Görünüm", captionEn: "Main Living Room View", room: "Salon", aspectRatio: "portrait" },
      { src: "/i-s/salon/image00002.webp", caption: "Oturma Grubu ve Şömine Detayı", captionEn: "Seating Ensemble & Fireplace Detail", room: "Salon", aspectRatio: "portrait" },
      { src: "/i-s/salon/image00003.webp", caption: "Salon TV Ünitesi Kurgusu", captionEn: "TV Unit Arrangement", room: "Salon", aspectRatio: "landscape" },
      { src: "/i-s/salon/image00004.webp", caption: "Salon Gün Işığı Açısı", captionEn: "Daylight Living Room Angle", room: "Salon", aspectRatio: "portrait" },
      { src: "/i-s/salon/image00005.webp", caption: "Salon Mobilya ve Tekstil Dokusu", captionEn: "Furniture & Textile Texture", room: "Salon", aspectRatio: "portrait" },
      { src: "/i-s/salon/image00006.webp", caption: "Orta Sehpa ve Aksesuar Tasarımı", captionEn: "Coffee Table & Accessory Design", room: "Salon", aspectRatio: "portrait" },
      { src: "/i-s/salon/image00007.webp", caption: "Salon Köşe Perspektifi", captionEn: "Living Room Corner View", room: "Salon", aspectRatio: "portrait" },
      { src: "/i-s/salon/image00008.webp", caption: "Salon Aydınlatma Elemanları", captionEn: "Lighting Features", room: "Salon", aspectRatio: "landscape" },
      { src: "/i-s/salon/image00009.webp", caption: "Salon Derinlik Görünümü", captionEn: "Living Room Depth View", room: "Salon", aspectRatio: "portrait" },
      { src: "/i-s/salon/image00010.webp", caption: "Yemek Alanı ve Salon İletişimi", captionEn: "Dining & Living Room Continuity", room: "Salon", aspectRatio: "portrait" },
      { src: "/i-s/salon/image00011.webp", caption: "Pencere Önü Oturma Alanı", captionEn: "Window Side Seating", room: "Salon", aspectRatio: "portrait" },
      { src: "/i-s/salon/image00013.webp", caption: "Geniş Salon Açı Görünümü", captionEn: "Wide Living Room Angle", room: "Salon", aspectRatio: "portrait" },
      { src: "/i-s/salon/image00014.webp", caption: "Salon Duvar Paneli Detayı", captionEn: "Wall Paneling Detail", room: "Salon", aspectRatio: "portrait" },
      { src: "/i-s/salon/image00015.webp", caption: "Salon Genel Perspektif", captionEn: "Living Room Overall Perspective", room: "Salon", aspectRatio: "portrait" },
      { src: "/i-s/salon/image00019.webp", caption: "Salon Odak Noktası", captionEn: "Living Room Focal Point", room: "Salon", aspectRatio: "portrait" },

      // Mutfak (7)
      { src: "/i-s/mutfak/image00035.webp", caption: "Mutfak Genel Görünümü", captionEn: "Overall Kitchen View", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/i-s/mutfak/image00036.webp", caption: "Mutfak Ada Tezgah Kurgusu", captionEn: "Kitchen Island Layout", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/i-s/mutfak/image00037.webp", caption: "Dolap Kapakları ve Tezgah İçi", captionEn: "Cabinetry & Countertop Detail", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/i-s/mutfak/image00039.webp", caption: "Mutfak Ankastre ve Depolama", captionEn: "Integrated Appliances & Storage", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/i-s/mutfak/image00040.webp", caption: "Mutfak Aydınlatma ve Tavan", captionEn: "Kitchen Lighting & Ceiling", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/i-s/mutfak/image00041.webp", caption: "Mutfak Kahvaltı Barı Bakışı", captionEn: "Breakfast Bar Perspective", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/i-s/mutfak/image00042.webp", caption: "Mutfak Pencere Cephesi", captionEn: "Kitchen Window Elevation", room: "Mutfak", aspectRatio: "portrait" },

      // Oturma Odası (9)
      { src: "/i-s/oturma_odasi/image05916.webp", caption: "Oturma Odası Ana Görünüm", captionEn: "Lounge Main View", room: "Oturma Odası", aspectRatio: "portrait" },
      { src: "/i-s/oturma_odasi/image05917.webp", caption: "Oturma Odası TV Ünitesi", captionEn: "Lounge TV Unit", room: "Oturma Odası", aspectRatio: "portrait" },
      { src: "/i-s/oturma_odasi/image05918.webp", caption: "Koltuk ve Yastık Detayları", captionEn: "Sofa & Cushion Details", room: "Oturma Odası", aspectRatio: "portrait" },
      { src: "/i-s/oturma_odasi/image05919.webp", caption: "Oturma Odası Kitaplık Kurgusu", captionEn: "Lounge Library Nook", room: "Oturma Odası", aspectRatio: "portrait" },
      { src: "/i-s/oturma_odasi/image05920.webp", caption: "Oturma Odası Gün Işığı Odaklı Bakış", captionEn: "Lounge Daylight View", room: "Oturma Odası", aspectRatio: "portrait" },
      { src: "/i-s/oturma_odasi/image05922.webp", caption: "Oturma Odası Dekoratif Detaylar", captionEn: "Decorative Accents", room: "Oturma Odası", aspectRatio: "portrait" },
      { src: "/i-s/oturma_odasi/image05923.webp", caption: "Oturma Odası Dinlenme Açısı", captionEn: "Relaxation Corner Angle", room: "Oturma Odası", aspectRatio: "portrait" },
      { src: "/i-s/oturma_odasi/image05925.webp", caption: "Oturma Odası Derinlik Açısı", captionEn: "Depth View of Lounge", room: "Oturma Odası", aspectRatio: "portrait" },
      { src: "/i-s/oturma_odasi/image05924.webp", caption: "Oturma Odası Köşe Perspektifi", captionEn: "Corner Perspective of Lounge", room: "Oturma Odası", aspectRatio: "portrait" },

      // Yatak Odası (12)
      { src: "/i-s/yatak_odasi/image00043.webp", caption: "Yatak Odası Ana Görünüm", captionEn: "Master Bedroom Main View", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/i-s/yatak_odasi/image00044.webp", caption: "Yatak Başucu ve Duvar Kaplaması", captionEn: "Headboard & Wall Cladding", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/i-s/yatak_odasi/image00045.webp", caption: "Komodin ve Aydınlatma Tasarımı", captionEn: "Nightstand & Lighting Design", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/i-s/yatak_odasi/image00046.webp", caption: "Gardırop ve Soyunma Bölümü", captionEn: "Wardrobe & Dressing Nook", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/i-s/yatak_odasi/image00047.webp", caption: "Yatak Odası Makyaj Masası", captionEn: "Vanity Dressing Table", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/i-s/yatak_odasi/image00048.webp", caption: "Tekstil ve Kumaş Dokuları", captionEn: "Fabric & Textile Textures", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/i-s/yatak_odasi/image00049.webp", caption: "Yatak Odası Pencere Açısı", captionEn: "Bedroom Window Angle", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/i-s/yatak_odasi/image00050.webp", caption: "Gizli Işık ve Tavan Detayı", captionEn: "Cove Lighting & Ceiling Detail", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/i-s/yatak_odasi/image00051.webp", caption: "Yatak Odası Atmosfer Bakışı", captionEn: "Bedroom Ambient View", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/i-s/yatak_odasi/image00053.webp", caption: "Yatak Odası Giriş Perspektifi", captionEn: "Bedroom Entrance View", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/i-s/yatak_odasi/image00056.webp", caption: "Yatak Odası Dinlenme Köşesi", captionEn: "Relaxation Seating Corner", room: "Yatak Odası", aspectRatio: "portrait" },
      { src: "/i-s/yatak_odasi/image00057.webp", caption: "Yatak Odası Derinlik Perspektifi", captionEn: "Depth View of Bedroom", room: "Yatak Odası", aspectRatio: "portrait" },

      // Banyo (6)
      { src: "/i-s/banyo/image05927.webp", caption: "Banyo Genel Görünüm", captionEn: "Overall Bathroom View", room: "Banyo", aspectRatio: "portrait" },
      { src: "/i-s/banyo/image05929.webp", caption: "Banyo Tezgahı ve Lavabo Detayı", captionEn: "Vanity & Washbasin Detail", room: "Banyo", aspectRatio: "portrait" },
      { src: "/i-s/banyo/image05930.webp", caption: "Ayna ve Aydınlatma Kurgusu", captionEn: "Mirror & Lighting Design", room: "Banyo", aspectRatio: "portrait" },
      { src: "/i-s/banyo/image05931.webp", caption: "Duş Kabini ve Seramik Kaplama", captionEn: "Shower Enclosure & Ceramic Tiles", room: "Banyo", aspectRatio: "portrait" },
      { src: "/i-s/banyo/image05932.webp", caption: "Banyo Dolabı ve Depolama", captionEn: "Bathroom Cabinet & Storage", room: "Banyo", aspectRatio: "portrait" },
      { src: "/i-s/banyo/image05934.webp", caption: "Banyo Doku ve Armatür Detayı", captionEn: "Bathroom Texture & Fixture Detail", room: "Banyo", aspectRatio: "portrait" },

      // Koridor (10)
      { src: "/i-s/koridor/image00020.webp", caption: "Giriş Holü ve Portmanto", captionEn: "Entrance Hall & Cloakroom", room: "Koridor", aspectRatio: "portrait" },
      { src: "/i-s/koridor/image00021.webp", caption: "Koridor Aydınlatma Tasarımı", captionEn: "Corridor Lighting Design", room: "Koridor", aspectRatio: "portrait" },
      { src: "/i-s/koridor/image00022.webp", caption: "Koridor Kapı ve Panel Detayları", captionEn: "Door & Panel Joinery", room: "Koridor", aspectRatio: "portrait" },
      { src: "/i-s/koridor/image00023.webp", caption: "Giriş Konsol ve Ayna", captionEn: "Entrance Console & Mirror", room: "Koridor", aspectRatio: "portrait" },
      { src: "/i-s/koridor/image00026.webp", caption: "Koridor Odalar Arası Geçiş", captionEn: "Corridor Inter-room Transition", room: "Koridor", aspectRatio: "portrait" },
      { src: "/i-s/koridor/image00027.webp", caption: "Giriş Holü Genel Perspektif", captionEn: "Entrance Hall General View", room: "Koridor", aspectRatio: "portrait" },
      { src: "/i-s/koridor/image00028.webp", caption: "Koridor Duvar Çıtaları", captionEn: "Corridor Wall Moulding", room: "Koridor", aspectRatio: "portrait" },
      { src: "/i-s/koridor/image00029.webp", caption: "Koridor Zemin Dokusu", captionEn: "Corridor Flooring Texture", room: "Koridor", aspectRatio: "portrait" },
      { src: "/i-s/koridor/image00031.webp", caption: "Koridor Tavan Işıklandırma Detayı", captionEn: "Corridor Ceiling Light Detail", room: "Koridor", aspectRatio: "portrait" },
      { src: "/i-s/koridor/image00034.webp", caption: "Koridor Derinlik Açısı", captionEn: "Corridor Perspective View", room: "Koridor", aspectRatio: "portrait" },
    ],
  },
  {
    slug: "glddoor",
    title: "GLDOOR Showroom & Ofis",
    titleEn: "GLDOOR Showroom & Office",
    category: "Ticari & Ofis",
    categoryEn: "Commercial & Office",
    location: "Bandırma, Balıkesir",
    locationEn: "Bandırma, Balıkesir",
    area: "250 m²",
    client: "GLDOOR",
    clientEn: "GLDOOR",
    status: "Tamamlandı",
    statusEn: "Completed",
    cover: "/glddoor/7.webp",
    summary: "GLDOOR markası için tasarlanan; ürün sergileme modülleri, malzeme numune panoları ve yönetim alanını bir arada sunan modern showroom projesi.",
    summaryEn: "A modern showroom and management office project designed for GLDOOR, integrating custom material display modules, sample walls, and executive workspace.",
    description: [
      "GLDOOR Showroom & Ofis projesi; ahşap paneller, kapak numuneleri, süpürgelik modülleri ve kapı tipolojilerinin sergilendiği nitelikli bir ticari iç mekân tasarımıdır.",
      "Yönetim ofisi bölümünde yer alan özel logo duvarı, şık çalışma masası kurgusu ve aydınlatma detayları ile kurumsal kimlik mekânın genel atmosferine entegre edilmiştir.",
    ],
    descriptionEn: [
      "GLDOOR Showroom & Office is a refined commercial interior project dedicated to displaying wood panels, cabinet doors, skirting modules, and door typologies.",
      "In the executive office section, a bespoke feature logo wall, executive desk arrangement, and tailored lighting integrate the corporate identity seamlessly into the overall atmosphere.",
    ],
    gallery: [
      // Showroom (8)
      { src: "/glddoor/7.webp", caption: "Showroom Kapsamlı Perspektif", captionEn: "Comprehensive Showroom View", room: "Showroom", aspectRatio: "landscape" },
      { src: "/glddoor/1.webp", caption: "MDFLAM & Suntalam Sergileme Alanı", captionEn: "MDFLAM & Suntalam Display Area", room: "Showroom", aspectRatio: "landscape" },
      { src: "/glddoor/2.webp", caption: "Showroom Genel Malzeme Duvarı", captionEn: "Showroom Material Wall View", room: "Showroom", aspectRatio: "landscape" },
      { src: "/glddoor/3.webp", caption: "Ahşap & Taş Doku Numuneleri", captionEn: "Wood & Stone Texture Samples", room: "Showroom", aspectRatio: "portrait" },
      { src: "/glddoor/4.webp", caption: "HG Kapak & Panel Sergileme Ünitesi", captionEn: "High-Gloss Panel Display Unit", room: "Showroom", aspectRatio: "portrait" },
      { src: "/glddoor/5.webp", caption: "Parke & Süpürgelik Modülü", captionEn: "Parquet & Skirting Module", room: "Showroom", aspectRatio: "landscape" },
      { src: "/glddoor/6.webp", caption: "Ahşap Kapı & Süpürgelik Detayı", captionEn: "Wooden Door & Skirting Detail", room: "Showroom", aspectRatio: "portrait" },
      { src: "/glddoor/9.webp", caption: "Parke & Süpürgelik Tipolojileri", captionEn: "Parquet & Skirting Types", room: "Showroom", aspectRatio: "landscape" },

      // Ofis (2)
      { src: "/glddoor/8.webp", caption: "GLDOOR Yönetim Ofisi & Karşılama Alanı", captionEn: "GLDOOR Executive Office & Reception", room: "Ofis", aspectRatio: "portrait" },
      { src: "/glddoor/10.webp", caption: "GLDOOR Logo & Ahşap Panel Duvarı", captionEn: "GLDOOR Feature Logo Wall", room: "Ofis", aspectRatio: "portrait" },
    ],
  },
  {
    slug: "y-h-evi",
    title: "Y-H Evi",
    titleEn: "Y-H House",
    category: "Konut İç Mekân",
    categoryEn: "Residential Interior",
    location: "Bandırma, Balıkesir",
    locationEn: "Bandırma, Balıkesir",
    area: "260 m²",
    client: "Özel",
    clientEn: "Private",
    status: "Tamamlandı",
    statusEn: "Completed",
    cover: "/y-h/oturma_odasi/image00004.webp",
    summary: "Mermer dokulu duvar panelleri, pastel gri-krem tonları ve özel imalat oluklu gardırop detaylarıyla tasarlanan modern konut projesi.",
    summaryEn: "A modern residential project designed with marble-textured wall panels, soft grey-cream tones, and custom fluted wardrobe details.",
    description: [
      "Y-H Evi; salon, mutfak ve yatak odası alanlarının rafine malzeme tercihleri ve özgün mobilya detaylarıyla kurgulandığı özel bir konut projesidir.",
      "Mekânda tercih edilen mermer yüzeyler, çıtalı duvar kaplamaları ve özel tasarım oluklu kapak kurguları, konutun çağdaş atmosferini güçlendirmektedir.",
    ],
    descriptionEn: [
      "Y-H House is a tailored residential project where living room, kitchen, and bedroom environments are defined by refined material choices and custom joinery details.",
      "Marble-textured wall claddings, slatted wall features, and custom fluted wardrobe doors enhance the contemporary spatial elegance throughout the residence.",
    ],
    gallery: [
      // Oturma Odası (10)
      { src: "/y-h/oturma_odasi/image00001.webp", caption: "TV Ünitesi ve Mermer Kaplama Duvar", captionEn: "TV Unit & Marble Wall Panel", room: "Oturma Odası", aspectRatio: "landscape" },
      { src: "/y-h/oturma_odasi/image00003.webp", caption: "TV Ünitesi Odak Görünümü", captionEn: "TV Unit Focal View", room: "Oturma Odası", aspectRatio: "portrait" },
      { src: "/y-h/oturma_odasi/image00004.webp", caption: "Dekoratif Duvar Çıtası ve Aksesuar", captionEn: "Decorative Wall Slat & Decor", room: "Oturma Odası", aspectRatio: "portrait" },
      { src: "/y-h/oturma_odasi/image00005.webp", caption: "Salon Geniş Açı Bakışı", captionEn: "Wide Living Room View", room: "Oturma Odası", aspectRatio: "landscape" },
      { src: "/y-h/oturma_odasi/image00013.webp", caption: "Salon Yemek ve Oturma Alanı", captionEn: "Living & Dining Seating View", room: "Oturma Odası", aspectRatio: "portrait" },
      { src: "/y-h/oturma_odasi/image00016.webp", caption: "Salon Köşe Detayı", captionEn: "Living Room Corner Detail", room: "Oturma Odası", aspectRatio: "portrait" },
      { src: "/y-h/oturma_odasi/image00017.webp", caption: "Salon Genel Perspektifi", captionEn: "Living Room General Perspective", room: "Oturma Odası", aspectRatio: "portrait" },

      // Mutfak (6)
      { src: "/y-h/mutfak/image00006.webp", caption: "Mutfak Dolapları ve Buzdolabı Modülü", captionEn: "Kitchen Cabinets & Fridge Module", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/y-h/mutfak/image00007.webp", caption: "Tezgah Üstü ve Aydınlatma Detayı", captionEn: "Countertop & Lighting Detail", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/y-h/mutfak/image00008.webp", caption: "Mutfak Evye ve Çalışma Alanı", captionEn: "Kitchen Sink & Worktop", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/y-h/mutfak/image00009.webp", caption: "Ankastre ve Dolap Kurgusu", captionEn: "Built-in Appliances & Cabinetry", room: "Mutfak", aspectRatio: "portrait" },
      { src: "/y-h/mutfak/image00011.webp", caption: "Geniş Mutfak Perspektifi", captionEn: "Wide Kitchen View", room: "Mutfak", aspectRatio: "landscape" },
      { src: "/y-h/mutfak/image00012.webp", caption: "Mutfak Yemek Köşesi", captionEn: "Kitchen Dining Nook", room: "Mutfak", aspectRatio: "portrait" },

      // Yatak Odası (2)
      { src: "/y-h/gardrop/image00018.webp", caption: "Özel İmalat Oluklu Gardırop Tasarımı", captionEn: "Custom Fluted Wardrobe Design", room: "Yatak Odası", aspectRatio: "portrait" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
