const CACHE_KEY = "github_repos_cache_v1"
const CACHE_MS = 60 * 60 * 1000

export type GitHubRepo = {
  id: number
  name: string
  html_url: string
  description: string | null
  homepage: string | null
  language: string | null
  topics?: string[]
  fork: boolean
  stargazers_count: number
  pushed_at: string | null
}

type CachePayload = { at: number; repos: GitHubRepo[] }

function readCache(username: string): GitHubRepo[] | null {
  try {
    const raw = sessionStorage.getItem(`${CACHE_KEY}_${username}`)
    if (!raw) return null
    const parsed = JSON.parse(raw) as CachePayload
    if (!parsed?.at || !Array.isArray(parsed.repos)) return null
    if (Date.now() - parsed.at > CACHE_MS) return null
    return parsed.repos
  } catch {
    return null
  }
}

function writeCache(username: string, repos: GitHubRepo[]) {
  try {
    const payload: CachePayload = { at: Date.now(), repos }
    sessionStorage.setItem(`${CACHE_KEY}_${username}`, JSON.stringify(payload))
  } catch {
    /* ignore quota */
  }
}

export async function fetchGithubRepos(username: string): Promise<GitHubRepo[]> {
  const cached = readCache(username)
  if (cached) return cached

  const token = import.meta.env.VITE_GITHUB_TOKEN as string | undefined
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  }
  if (token) {
    ;(headers as Record<string, string>).Authorization = `Bearer ${token}`
  }

  const url = `https://api.github.com/users/${encodeURIComponent(
    username
  )}/repos?sort=updated&per_page=12&type=owner`

  const res = await fetch(url, { headers })
  if (!res.ok) {
    const text = await res.text().catch(() => "")
    throw new Error(
      res.status === 403
        ? "Limite da API do GitHub atingido. Tente mais tarde ou configure VITE_GITHUB_TOKEN no .env.local (apenas desenvolvimento)."
        : `Falha ao carregar repositórios (${res.status}). ${text.slice(0, 120)}`
    )
  }

  const data = (await res.json()) as GitHubRepo[]
  const list = data.filter((r) => !r.fork)
  writeCache(username, list)
  return list
}
