import { useState } from 'react'

const RepositoryList: React.FC = () => {
  const [term, setTerm] = useState<string>('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
