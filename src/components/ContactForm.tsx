"use client";

import { useState } from "react";
import { toast } from "sonner";

export function ContactForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      e.currentTarget?.reset?.();
      toast.success("Mesajınız alındı. En kısa sürede dönüş yapacağız.");
    }, 600);
  };

  const field =
    "w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground";
  const labelCls = "eyebrow text-muted-foreground";

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate={false}>
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className={labelCls}>
            Ad Soyad *
          </label>
          <input
            required
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Adınız"
            className={field}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className={labelCls}>
            E-posta *
          </label>
          <input
            required
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="ornek@eposta.com"
            className={field}
          />
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="phone" className={labelCls}>
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+90"
            className={field}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className={labelCls}>
            Proje türü
          </label>
          <input id="subject" name="subject" placeholder="Konut, ofis, otel…" className={field} />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className={labelCls}>
          Mesajınız *
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows={5}
          placeholder="Mekânınızdan ve beklentinizden kısaca bahsedin."
          className={field}
        />
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex min-h-12 items-center gap-3 bg-primary px-10 py-4 eyebrow text-primary-foreground transition-opacity hover:opacity-85 disabled:opacity-50"
        >
          {sending ? "Gönderiliyor…" : "Gönder"}
        </button>
        <p className="text-xs text-muted-foreground">* Zorunlu alanlar</p>
      </div>
      <p aria-live="polite" className="sr-only">
        {sending ? "Mesajınız gönderiliyor" : ""}
      </p>
    </form>
  );
}
