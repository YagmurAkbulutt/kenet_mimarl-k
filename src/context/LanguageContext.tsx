"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export type Language = "tr" | "en";

export const translations = {
  tr: {
    // Nav
    nav_home: "Ana Sayfa",
    nav_projects: "Projeler",
    nav_about: "Hakkımızda",
    nav_services: "Hizmetler",
    nav_contact: "İletişim",

    // Footer
    footer_tagline: "Ölçek fark etmeksizin; ışık, malzeme ve oran üzerine kurulu sakin bir iç mimari pratiği.",
    footer_menu: "Menü",
    footer_contact: "İletişim",
    footer_address: "Adres",

    // WhatsApp
    wa_title: "WhatsApp İletişim Hattı",
    wa_subtitle: "Görüşmek istediğiniz birimi seçiniz:",
    wa_ruhsat_title: "Ruhsat Projesi",
    wa_ruhsat_phone: "0 536 206 30 63",
    wa_ruhsat_desc: "Ruhsat projelendirme ve resmi süreçler",
    wa_ruhsat_msg: "Merhaba, Ruhsat Projesi hakkında bilgi almak istiyorum.",
    wa_tasarim_title: "Tasarım Uygulama",
    wa_tasarim_phone: "0 543 263 85 20",
    wa_tasarim_desc: "İç mimari tasarım ve şantiye uygulaması",
    wa_tasarim_msg: "Merhaba, Tasarım & Uygulama hakkında bilgi almak istiyorum.",
    wa_close: "Kapat",

    // Split Hero
    hero_headline_p1: "projeden",
    hero_headline_p2: "uygulamaya",
    hero_ruhsat: "Ruhsat Projesi",
    hero_tasarim: "Tasarım Uygulama",

    // Home Page
    home_approach_eyebrow: "Yaklaşım",
    home_approach_text: "Her projeye kullanıcının yaşam ritmini dinleyerek başlarız. Işık, doku ve ölçeği; zamansız ve karakter sahibi yaşam alanları oluşturmak için kurgularız.",
    home_about_link: "Hakkımızda",
    home_selected_projects: "Seçilmiş Projeler",
    home_all_projects: "Tüm projeler",
    home_about_eyebrow: "Hakkımızda",
    home_about_title: "Yeni bir mimarlık enerjisi.",
    home_about_desc: "Göktuğkan Şirin ve Hüseyin Akar tarafından kurulan Kenet Mimarlık; genç, dinamik ve yenilikçi ekip yapısıyla ruhsat, tasarım ve uygulama süreçlerini bütüncül ele alır.",
    home_stat1_n: "2",
    home_stat1_l: "kurucu",
    home_stat2_n: "Tek",
    home_stat2_l: "ekip",
    home_stat3_n: "Tam",
    home_stat3_l: "süreç",
    home_contact_eyebrow: "İletişim",
    home_contact_title: "Mekânınızı birlikte kurgulayalım.",
    home_contact_desc: "Kısa bir görüşmeyle ihtiyaç programınızı, bütçenizi ve takviminizi netleştirelim.",
    home_contact_btn: "İletişime Geçin",

    // Projects Page & Detail
    projects_eyebrow: "Çalışmalarımız",
    projects_title: "Projeler",
    projects_desc: "Ölçek fark etmeksizin; ışık, malzeme ve oran üzerine kurulu seçilmiş konut projeleri.",
    filter_all: "Hepsi",
    filter_residential: "Konut İç Mekân",

    // Project Detail Meta
    meta_location: "Konum",
    meta_area: "Alan",
    meta_client: "Müşteri",
    meta_status: "Durum",
    meta_status_completed: "Tamamlandı",
    meta_client_private: "Özel",
    gallery_title: "Proje Galerisi",
    not_found_title: "Proje bulunamadı",
    back_to_projects: "Tüm projelere dön",

    // Room captions / Tabs
    room_all: "Tümü",
    room_salon: "Salon",
    room_mutfak: "Mutfak",
    room_oturma_odasi: "Oturma Odası",
    room_yatak_odasi: "Yatak Odası",
    room_koridor: "Koridor",
    room_balkon: "Balkon",

    // Studio Page
    studio_eyebrow: "Stüdyo",
    studio_title: "Kenet Mimarlık",
    studio_desc: "Bütüncül mimari tasarım, iç mekan kurgusu ve uygulama pratiği.",
    studio_founders_title: "Kurucular",
    studio_founders_desc: "Stüdyomuzun vizyonunu ve tasarım disiplinini şekillendiren ortaklarımız.",
    studio_values_eyebrow: "İlkelerimiz",
    studio_values_title: "Yaklaşım & Disiplin",
    val1_title: "Bütüncül Tasarım",
    val1_desc: "Ruhsat projelendirmesinden ince imalata ve mobilya seçimine kadar her aşamayı tek bir tasarım dili etrafında toplarız.",
    val2_title: "Net Proje Disiplini",
    val2_desc: "Bütçe ve zaman yönetimini tasarım kalitesi kadar önceler, sürprizsiz ve şeffaf bir süreç yürütürüz.",
    val3_title: "Seçici Detay",
    val3_desc: "Gereksiz süsten kaçınır; malzeme birleşimleri, ışık açıları ve oranlarla dingin bir estetik yakalarız.",

    // Services Page
    services_eyebrow: "Hizmetler",
    services_title: "Uçtan uca mimari ve uygulama çözümleri.",
    services_desc: "Fikirden ruhsata, detay projeden şantiye teslimine kadar tüm süreçte yanınızdayız.",
    service1_title: "Ruhsat Projesi",
    service1_desc: "İlgili belediye ve resmi kurum standartlarına uygun mimari ruhsat projelerinin hazırlanması ve onay süreçlerinin takibi.",
    service2_title: "Tasarım & Uygulama",
    service2_desc: "İç mekan 3D görselleştirme, uygulama çizimleri, malzeme seçimi, imalat ve şantiye takibi dâhil anahtar teslim süreçler.",
    services_scope_eyebrow: "Kapsam",
    services_scope_title: "Hizmet Kapsamımız",
    s_int: "İç Mimari Tasarım",
    s_space: "Mekân Planlama",
    s_vis: "Görselleştirme",
    s_furn: "Mobilya Tasarımı",
    s_site: "Uygulama & Şantiye",
    s_consult: "Danışmanlık",
    s_consult_desc: "Mevcut mekân değerlendirmesi, renovasyon ve stil yönlendirmesi.",

    // Contact Page
    contact_eyebrow: "Bize ulaşın",
    contact_title: "İletişim",
    contact_desc: "Proje ve randevu talepleriniz için bize ulaşın.",
    contact_map_btn: "Haritada Aç",
    contact_email_title: "E-posta",
    contact_phone_title: "Telefon",
    contact_social_title: "Sosyal",
    contact_address_title: "Adres",
  },
  en: {
    // Nav
    nav_home: "Home",
    nav_projects: "Projects",
    nav_about: "About",
    nav_services: "Services",
    nav_contact: "Contact",

    // Footer
    footer_tagline: "A calm interior architecture practice built on light, material, and proportion regardless of scale.",
    footer_menu: "Menu",
    footer_contact: "Contact",
    footer_address: "Address",

    // WhatsApp
    wa_title: "WhatsApp Contact Line",
    wa_subtitle: "Select the department you wish to contact:",
    wa_ruhsat_title: "Permit Project",
    wa_ruhsat_phone: "0 536 206 30 63",
    wa_ruhsat_desc: "Permit drafting & municipal approval processes",
    wa_ruhsat_msg: "Hello, I would like to get information about Permit Projects.",
    wa_tasarim_title: "Design & Build",
    wa_tasarim_phone: "0 543 263 85 20",
    wa_tasarim_desc: "Interior architectural design & site execution",
    wa_tasarim_msg: "Hello, I would like to get information about Design & Build.",
    wa_close: "Close",

    // Split Hero
    hero_headline_p1: "from design to",
    hero_headline_p2: "execution",
    hero_ruhsat: "Permit Project",
    hero_tasarim: "Design & Build",

    // Home Page
    home_approach_eyebrow: "Approach",
    home_approach_text: "We begin every project by listening to the user's rhythm of life. We orchestrate light, texture, and scale to craft timeless living spaces with distinct character.",
    home_about_link: "About Us",
    home_selected_projects: "Selected Projects",
    home_all_projects: "All projects",
    home_about_eyebrow: "About",
    home_about_title: "A fresh architectural energy.",
    home_about_desc: "Founded by Göktuğkan Şirin and Hüseyin Akar, Kenet Mimarlık takes a holistic approach to permit, design, and build processes with its young, dynamic, and innovative team.",
    home_stat1_n: "2",
    home_stat1_l: "founders",
    home_stat2_n: "One",
    home_stat2_l: "team",
    home_stat3_n: "Full",
    home_stat3_l: "process",
    home_contact_eyebrow: "Contact",
    home_contact_title: "Let's shape your space together.",
    home_contact_desc: "Let's clarify your program, budget, and timeline with a brief discussion.",
    home_contact_btn: "Get in Touch",

    // Projects Page & Detail
    projects_eyebrow: "Our Portfolio",
    projects_title: "Projects",
    projects_desc: "Selected residential projects built on light, material, and refined proportion.",
    filter_all: "All",
    filter_residential: "Residential Interior",

    // Project Detail Meta
    meta_location: "Location",
    meta_area: "Area",
    meta_client: "Client",
    meta_status: "Status",
    meta_status_completed: "Completed",
    meta_client_private: "Private",
    gallery_title: "Project Gallery",
    not_found_title: "Project not found",
    back_to_projects: "Back to all projects",

    // Room captions / Tabs
    room_all: "All",
    room_salon: "Living Room",
    room_mutfak: "Kitchen",
    room_oturma_odasi: "Lounge",
    room_yatak_odasi: "Bedroom",
    room_koridor: "Hallway",
    room_balkon: "Balcony",

    // Studio Page
    studio_eyebrow: "Studio",
    studio_title: "Kenet Mimarlık",
    studio_desc: "A contemporary practice delivering holistic architectural design, interior spatial concepts, and turn-key execution.",
    studio_founders_title: "Founders",
    studio_founders_desc: "Our partners shaping the vision and design discipline of our studio.",
    studio_values_eyebrow: "Principles",
    studio_values_title: "Approach & Discipline",
    val1_title: "Holistic Design",
    val1_desc: "We unify every phase from permit drafting to fine execution and furniture selection around a cohesive design language.",
    val2_title: "Rigorous Discipline",
    val2_desc: "We value budget and schedule management as much as design quality, delivering a transparent and seamless process.",
    val3_title: "Refined Detailing",
    val3_desc: "Avoiding unnecessary decoration, we achieve serene aesthetics through material junctions, light angles, and proportions.",

    // Services Page
    services_eyebrow: "Services",
    services_title: "End-to-end architectural and build solutions.",
    services_desc: "We stand by you from initial concepts and permits to working drawings and turn-key site delivery.",
    service1_title: "Permit Project",
    service1_desc: "Preparation of official architectural permit drawings in compliance with municipal regulations and approval tracking.",
    service2_title: "Design & Build",
    service2_desc: "Turn-key execution including 3D visualization, detailed shop drawings, material selection, custom fabrication, and site supervision.",
    services_scope_eyebrow: "Scope",
    services_scope_title: "Our Scope of Services",
    s_int: "Interior Architectural Design",
    s_space: "Space Planning",
    s_vis: "3D Visualization",
    s_furn: "Custom Furniture Design",
    s_site: "Site Execution & Supervision",
    s_consult: "Consulting",
    s_consult_desc: "Property assessment, renovation strategy, and stylistic direction.",

    // Contact Page
    contact_eyebrow: "Get in touch",
    contact_title: "Contact",
    contact_desc: "Reach out to us for project inquiries and consultation requests.",
    contact_map_btn: "Open in Maps",
    contact_email_title: "Email",
    contact_phone_title: "Phone",
    contact_social_title: "Social",
    contact_address_title: "Address",
  },
};

type TranslationKey = keyof typeof translations.tr;

const routeMap: Record<string, { tr: string; en: string }> = {
  "/": { tr: "/", en: "/en" },
  "/en": { tr: "/", en: "/en" },
  "/projeler": { tr: "/projeler", en: "/en/projects" },
  "/en/projects": { tr: "/projeler", en: "/en/projects" },
  "/studyo": { tr: "/studyo", en: "/en/about" },
  "/en/about": { tr: "/studyo", en: "/en/about" },
  "/hizmetler": { tr: "/hizmetler", en: "/en/services" },
  "/en/services": { tr: "/hizmetler", en: "/en/services" },
  "/iletisim": { tr: "/iletisim", en: "/en/contact" },
  "/en/contact": { tr: "/iletisim", en: "/en/contact" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  getLink: (path: string, forcedLang?: Language) => string;
  switchLanguage: (targetLang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const router = useRouter();

  // Determine current language from current route
  const isEnRoute = pathname === "/en" || pathname.startsWith("/en/");
  const language: Language = isEnRoute ? "en" : "tr";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const getLink = (path: string, forcedLang?: Language): string => {
    const targetLang = forcedLang ?? language;

    if (!path || !path.startsWith("/")) return path;

    // Clean anchor/query
    const parts = path.split("?");
    const basePath = parts[0] || "/";
    const search = parts[1] ? `?${parts[1]}` : "";

    // Exact static route match
    if (routeMap[basePath]) {
      return routeMap[basePath][targetLang] + search;
    }

    // Dynamic project route match: /projeler/[slug] or /en/projects/[slug]
    if (basePath.startsWith("/projeler/")) {
      const slug = basePath.replace("/projeler/", "");
      return (targetLang === "en" ? `/en/projects/${slug}` : `/projeler/${slug}`) + search;
    }
    if (basePath.startsWith("/en/projects/")) {
      const slug = basePath.replace("/en/projects/", "");
      return (targetLang === "en" ? `/en/projects/${slug}` : `/projeler/${slug}`) + search;
    }

    // Fallback prefixing
    if (targetLang === "en") {
      if (basePath === "/") return "/en" + search;
      return (basePath.startsWith("/en") ? basePath : `/en${basePath}`) + search;
    } else {
      if (basePath === "/en") return "/" + search;
      return (basePath.startsWith("/en/") ? basePath.replace(/^\/en/, "") : basePath) + search;
    }
  };

  const switchLanguage = (targetLang: Language) => {
    if (targetLang === language) return;
    const targetPath = getLink(pathname, targetLang);
    router.push(targetPath);
  };

  const setLanguage = (lang: Language) => {
    switchLanguage(lang);
  };

  const t = (key: TranslationKey): string => {
    let val = translations[language][key] || translations.tr[key] || key;
    if (language === "en") {
      val = val.replace(/İ/g, "I");
    }
    return val;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLink, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
