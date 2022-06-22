import { RepositoryItem } from "./RepositoryItem"
import { useState, useEffect } from "react"

import "../styles/index.scss"

// https://api.github.com/orgs/rocketseat/repos

interface Repository {
  name: string,
  description: string,
  html_url: string
}

export function RepositoryList () {
  const [repositories, setRepositories] = useState<Repository[]>([])

  return (
    <section className="repository-list">
        <h1>Lista de repositórios</h1>
        <h2>testando com a vic o github</h2>

        <ul>
            {repositories.map((repository) => {
              return <RepositoryItem key={repository.name} repository={repository} />
            })}
        </ul>

        <h2>mais um teste</h2>
    </section>
  )
}