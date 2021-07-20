import { useState } from 'react'
import { useActions } from '../hooks/useActions'

const RepositoryList: React.FC = () => {
  const [term, setTerm] = useState<string>('')
  const { searchRepositories } = useActions()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchRepositories(term)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  )
}

export default RepositoryList
