import { siteConfig } from "@/content/site"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function AutomationSection() {
  const { automation: a } = siteConfig
  return (
    <section
      id="automacao"
      className="scroll-mt-20 border-y border-border/60 bg-muted/20 py-16 sm:py-20"
      aria-labelledby="auto-title"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="auto-title"
          className="font-heading text-2xl font-semibold tracking-tight text-foreground"
        >
          {a.title}
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">{a.description}</p>
        <Card className="mt-8 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-base">Fluxo ilustrativo</CardTitle>
            <CardDescription>Fonte de dados → regras → destino</CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <div
              className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
              role="img"
              aria-label="Diagrama de fluxo: formulário, API, banco de dados e notificação"
            >
              <FlowNode label="Form / CRM" />
              <FlowArrow />
              <FlowNode label="n8n / scripts" accent />
              <FlowArrow />
              <FlowNode label="API / SQL" />
              <FlowArrow />
              <FlowNode label="E-mail / Slack" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function FlowNode({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <div
      className={`flex min-h-[52px] min-w-[120px] max-w-[140px] items-center justify-center rounded-lg border px-3 py-2 text-center text-xs font-medium shadow-sm sm:text-sm ${
        accent
          ? "border-primary/50 bg-primary/10 text-primary"
          : "border-border bg-card text-foreground"
      }`}
    >
      {label}
    </div>
  )
}

function FlowArrow() {
  return (
    <>
      <span className="text-primary sm:hidden" aria-hidden>
        ↓
      </span>
      <span className="hidden text-primary sm:inline" aria-hidden>
        →
      </span>
    </>
  )
}
