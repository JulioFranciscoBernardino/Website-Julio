import { useState } from "react"
import { siteConfig } from "@/content/site"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function NavLinks({
  className,
  onNavigate,
}: {
  className?: string
  onNavigate?: () => void
}) {
  return (
    <ul className={className}>
      {siteConfig.nav.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={onNavigate}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#" className="font-heading text-sm font-semibold tracking-tight text-foreground">
          {siteConfig.fullName.split(" ")[0]}
          <span className="text-primary">.</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          <NavLinks className="flex items-center gap-6 text-sm font-medium" />
        </nav>
        <div className="flex md:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Abrir menu">
                <MenuIcon className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="gap-0">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <NavLinks
                className="flex flex-col gap-4 p-4 text-base font-medium"
                onNavigate={() => setMenuOpen(false)}
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
