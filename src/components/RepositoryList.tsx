import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state'

const RepositoryList: React.FC = () => {
  const [term, setTerm] = useState<string>('')

  const dispatch = useDispatch()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(actionCreators.searchRepositories(term))
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
