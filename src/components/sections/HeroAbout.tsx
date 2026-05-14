import { siteConfig } from "@/content/site"
import { calcAge } from "@/lib/age"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Download, Link2 } from "lucide-react"

export function HeroSection() {
  const age = calcAge(siteConfig.birthDate)
  const initials = siteConfig.fullName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <section
      id="topo"
      className="scroll-mt-20 border-b border-border/60 bg-gradient-to-b from-card to-background py-16 sm:py-20"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center sm:px-6 md:flex-row md:items-start md:text-left">
        <Avatar className="size-28 border-2 border-primary/30 shadow-md sm:size-32">
          <AvatarImage src={siteConfig.photoSrc} alt="" />
          <AvatarFallback className="text-lg font-semibold">{initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 flex-col gap-4">
          <div>
            <p className="text-sm font-medium text-primary">Olá, eu sou</p>
            <h1
              id="hero-title"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              {siteConfig.fullName}
            </h1>
            <p className="mt-1 text-lg text-muted-foreground">{siteConfig.tagline}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {age} anos · {siteConfig.location}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
            {siteConfig.profile.stack.slice(0, 6).map((s) => (
              <Badge key={s} variant="secondary">
                {s}
              </Badge>
            ))}
            <Badge variant="outline">+</Badge>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            <Button asChild>
              <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
                <Link2 />
                GitHub
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
                <Link2 />
                LinkedIn
              </a>
            </Button>
            {siteConfig.cvDownloads.map((cv) => (
              <Button key={cv.href} variant="outline" asChild>
                <a href={cv.href} target="_blank" rel="noreferrer">
                  <Download />
                  {cv.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-20 py-16 sm:py-20" aria-labelledby="sobre-title">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="sobre-title"
          className="font-heading text-2xl font-semibold tracking-tight text-foreground"
        >
          {siteConfig.profile.title}
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Resumo profissional e competências técnicas.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Visão geral</CardTitle>
              <CardDescription>Backend, APIs e automação</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              {siteConfig.profile.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Stack</CardTitle>
              <CardDescription>Ferramentas e temas</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {siteConfig.profile.stack.map((s) => (
                <Badge key={s} variant="secondary">
                  {s}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
