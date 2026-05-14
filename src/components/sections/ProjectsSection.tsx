import { useMemo, useState } from "react"
import { siteConfig } from "@/content/site"
import { useGithubRepos } from "@/hooks/useGithubRepos"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { ExternalLink, Link2 } from "lucide-react"

export function ProjectsSection() {
  const state = useGithubRepos(siteConfig.githubUser)
  const [q, setQ] = useState("")

  const filtered = useMemo(() => {
    if (state.status !== "ok") return []
    const s = q.trim().toLowerCase()
    if (!s) return state.repos
    return state.repos.filter(
      (r) =>
        r.name.toLowerCase().includes(s) ||
        (r.description && r.description.toLowerCase().includes(s)) ||
        (r.language && r.language.toLowerCase().includes(s))
    )
  }, [state, q])

  return (
    <section
      id="projetos"
      className="scroll-mt-20 border-y border-border/60 bg-background py-16 sm:py-20"
      aria-labelledby="proj-title"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="proj-title"
          className="font-heading text-2xl font-semibold tracking-tight text-foreground"
        >
          Projetos no GitHub
        </h2>
        <p className="mt-2 text-muted-foreground">
          Repositórios públicos atualizados via API do GitHub (sem forks).
        </p>
        <div className="mt-6 max-w-md">
          <Input
            placeholder="Filtrar por nome, descrição ou linguagem…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Filtrar repositórios"
          />
        </div>

        {state.status === "loading" ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-5 w-2/3" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-16 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : null}

        {state.status === "error" ? (
          <Alert variant="destructive" className="mt-8">
            <AlertTitle>Não foi possível carregar os repositórios</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        ) : null}

        {state.status === "ok" && filtered.length === 0 ? (
          <p className="mt-8 text-sm text-muted-foreground">
            Nenhum repositório corresponde ao filtro.
          </p>
        ) : null}

        {state.status === "ok" && filtered.length > 0 ? (
          <ul className="mt-10 grid list-none gap-4 p-0 sm:grid-cols-2">
            {filtered.map((repo) => (
              <li key={repo.id}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-base font-semibold">{repo.name}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {repo.description || "Sem descrição."}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {repo.language ? (
                      <Badge variant="secondary">{repo.language}</Badge>
                    ) : null}
                    {(repo.topics ?? []).slice(0, 3).map((t) => (
                      <Badge key={t} variant="outline">
                        {t}
                      </Badge>
                    ))}
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2">
                    <Button size="sm" variant="default" asChild>
                      <a href={repo.html_url} target="_blank" rel="noreferrer">
                        <Link2 />
                        Código
                      </a>
                    </Button>
                    {repo.homepage ? (
                      <Button size="sm" variant="outline" asChild>
                        <a href={repo.homepage} target="_blank" rel="noreferrer">
                          <ExternalLink />
                          Demo
                        </a>
                      </Button>
                    ) : null}
                  </CardFooter>
                </Card>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}
