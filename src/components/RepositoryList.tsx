import { useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useSelector } from 'react-redux'

const RepositoryList: React.FC = () => {
  const [term, setTerm] = useState<string>('')
  const { searchRepositories } = useActions()
  const { data, error, loading } = useSelector(
    (state: any) => state.repositories
  )

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
