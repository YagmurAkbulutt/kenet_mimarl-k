"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import architecturalDrawing from "@/assets/about-architectural-drawing.png";

export function AboutDrawingImage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative aspect-[5/4] overflow-hidden bg-muted md:aspect-[4/3]">
      {mounted ? (
        <Image
          src={architecturalDrawing}
          alt="Mimari çizim, ruhsat projesi ve ölçek cetveli detayı"
          fill
          sizes="(min-width: 768px) 42vw, 100vw"
          className="object-cover"
        />
      ) : null}
    </div>
  );
}
