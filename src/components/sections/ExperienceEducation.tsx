import { siteConfig } from "@/content/site"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-20 border-y border-border/60 bg-card/40 py-16 sm:py-20"
      aria-labelledby="exp-title"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="exp-title"
          className="font-heading text-2xl font-semibold tracking-tight text-foreground"
        >
          Experiência profissional
        </h2>
        <p className="mt-2 text-muted-foreground">
          Trajetória em TI e atendimento ao cliente.
        </p>
        <div className="mt-10 space-y-8">
          {siteConfig.experience.map((job, i) => (
            <div key={job.company}>
              {i > 0 ? <Separator className="mb-8" /> : null}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{job.role}</CardTitle>
                  <CardDescription>
                    {job.company} · {job.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground sm:text-base">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EducationSection() {
  const { education: e } = siteConfig
  return (
    <section id="formacao" className="scroll-mt-20 py-16 sm:py-20" aria-labelledby="edu-title">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="edu-title"
          className="font-heading text-2xl font-semibold tracking-tight text-foreground"
        >
          Formação
        </h2>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>{e.degree}</CardTitle>
            <CardDescription>
              {e.school} · {e.period}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm font-medium text-foreground">
              Disciplinas relevantes
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {e.courses.map((c) => (
                <li
                  key={c}
                  className="rounded-md border border-border/80 bg-muted/30 px-3 py-2 text-sm text-muted-foreground"
                >
                  {c}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
