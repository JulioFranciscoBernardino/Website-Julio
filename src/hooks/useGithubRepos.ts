import { useEffect, useState } from "react"
import { fetchGithubRepos, type GitHubRepo } from "@/lib/github"

type State =
  | { status: "loading" }
  | { status: "ok"; repos: GitHubRepo[] }
  | { status: "error"; message: string }

export function useGithubRepos(username: string) {
  const [state, setState] = useState<State>({ status: "loading" })

  useEffect(() => {
    let cancelled = false
    fetchGithubRepos(username)
      .then((repos) => {
        if (!cancelled) setState({ status: "ok", repos })
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : "Erro desconhecido"
          setState({ status: "error", message })
        }
      })
    return () => {
      cancelled = true
    }
  }, [username])

  return state
}
