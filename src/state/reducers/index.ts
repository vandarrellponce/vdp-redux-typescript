import { combineReducers } from 'redux'
import repositoryReducer from './repoReducer'

const rootReducer = combineReducers({
  repositories: repositoryReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
