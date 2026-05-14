import { siteConfig } from "@/content/site"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ObjectivesSection() {
  const { objectives: o } = siteConfig
  return (
    <section
      id="objetivos"
      className="scroll-mt-20 py-16 sm:py-20"
      aria-labelledby="obj-title"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="obj-title"
          className="font-heading text-2xl font-semibold tracking-tight text-foreground"
        >
          {o.title}
        </h2>
        <p className="mt-2 text-muted-foreground">Onde quero chegar nos próximos anos.</p>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-base">Foco de carreira</CardTitle>
            <CardDescription>Backend, qualidade e impacto em produto</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              {o.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
