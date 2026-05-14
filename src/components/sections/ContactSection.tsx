import { siteConfig } from "@/content/site"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Mail, Phone, MapPin, Link2 } from "lucide-react"

export function ContactSection() {
  const mail = `mailto:${siteConfig.email}`
  const wa = `https://wa.me/5511996556155`

  return (
    <section
      id="contato"
      className="scroll-mt-20 border-t border-border/60 bg-card/30 py-16 sm:py-20"
      aria-labelledby="contato-title"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="contato-title"
          className="font-heading text-2xl font-semibold tracking-tight text-foreground"
        >
          Contato
        </h2>
        <p className="mt-2 text-muted-foreground">
          Convido a conversar sobre oportunidades, freelas ou colaborações em automação.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Canais</CardTitle>
              <CardDescription>E-mail, telefone e redes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href={mail}
                className="flex items-center gap-3 text-sm text-foreground hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-primary" aria-hidden />
                {siteConfig.email}
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-foreground hover:text-primary"
              >
                <Phone className="size-4 shrink-0 text-primary" aria-hidden />
                {siteConfig.phone} (WhatsApp)
              </a>
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="size-4 shrink-0 text-primary" aria-hidden />
                {siteConfig.location}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Button variant="secondary" size="sm" asChild>
                  <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
                    <Link2 />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
                    <Link2 />
                    GitHub
                  </a>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer">
                    <Link2 />
                    Instagram
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Currículo</CardTitle>
              <CardDescription>Download em PDF</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {siteConfig.cvDownloads.map((cv) => (
                <Button key={cv.href} variant="outline" asChild>
                  <a href={cv.href} target="_blank" rel="noreferrer">
                    {cv.label}
                  </a>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
