import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow text-muted-foreground">404</p>
        <h1 className="mt-6 font-display text-5xl font-light md:text-6xl">Sayfa bulunamadı</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center bg-primary px-8 eyebrow text-primary-foreground transition-opacity hover:opacity-85"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/projeler"
            className="inline-flex min-h-12 items-center border border-border px-8 eyebrow transition-colors hover:border-foreground"
          >
            Projeler
          </Link>
        </div>
      </div>
    </div>
  );
}
