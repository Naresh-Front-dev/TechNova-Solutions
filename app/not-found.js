import { SearchX } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <main className="grid min-h-[65vh] place-items-center bg-surface px-5 py-24 text-center">
      <div>
        <SearchX className="mx-auto text-brand-500" size={34} strokeWidth={1.5} aria-hidden="true" />
        <p className="mt-6 text-xs font-semibold tracking-[0.16em] text-brand-500 uppercase">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-ink-950">
          This page could not be found
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-7 text-muted">
          The address may have changed, or the page may no longer be available.
        </p>
        <ButtonLink href="/" className="mt-7">
          Return home
        </ButtonLink>
      </div>
    </main>
  );
}
