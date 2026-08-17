"use client";

import { useEffect, useState } from "react";

export function WhatsAppButton() {
  const [footerVisible, setFooterVisible] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const message = encodeURIComponent(
    "Merhaba, Kenet Mimarlık ile proje veya randevu hakkında görüşmek istiyorum.",
  );

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.02 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const checkModal = () => {
      setModalActive(document.body.getAttribute("data-lightbox-active") === "true");
    };

    checkModal();
    const observer = new MutationObserver(checkModal);
    observer.observe(document.body, { attributes: true, attributeFilter: ["data-lightbox-active"] });

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={`https://wa.me/905362063063?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geçin"
      className={`fixed right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_30px_oklch(0.14_0_0_/_0.18)] transition-all duration-500 hover:scale-105 focus-visible:scale-105 md:right-7 md:h-14 md:w-14 ${
        footerVisible ? "bottom-24 md:bottom-28" : "bottom-5 md:bottom-7"
      } ${modalActive ? "pointer-events-none opacity-0 scale-75 invisible" : "opacity-100 scale-100"}`}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6 md:h-7 md:w-7" fill="none">
        <path
          d="M26.7 5.3A14.9 14.9 0 0 0 3.3 23.1L2 30l7.1-1.9A14.9 14.9 0 0 0 26.7 5.3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M11.7 9.5c-.3-.7-.6-.7-.9-.7h-.7c-.2 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.2 2.6 4.1 6.4 5.6 3.2 1.3 3.9 1 4.6.9.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5l-2.7-1.3c-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.2.1-.5 0-.7l-1.2-2.8Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
