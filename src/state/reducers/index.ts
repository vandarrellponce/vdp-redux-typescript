import { combineReducers } from 'redux'
import repositoryReducer from './repoReducer'

const reducers = combineReducers({
  repositories: repositoryReducer,
})

export default reducers
