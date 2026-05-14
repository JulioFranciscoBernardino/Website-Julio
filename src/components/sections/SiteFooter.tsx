import { siteConfig } from "@/content/site"

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border/80 py-8 text-center text-sm text-muted-foreground">
      <div className="mx-auto max-w-5xl px-4">
        © {year} {siteConfig.fullName}. Feito com React, Vite, Tailwind e shadcn/ui.
      </div>
    </footer>
  )
}
