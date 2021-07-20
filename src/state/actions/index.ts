import { ActionType } from '../action-types'

interface SearchStartAction {
  type: ActionType.SEARCH_START
}

interface SearchSuccessAction {
  type: ActionType.SEARCH_SUCCESS
  payload: string[]
}
interface SearchErrorAction {
  type: ActionType.SEARCH_ERROR
  payload: string
}

export type Action = SearchStartAction | SearchSuccessAction | SearchErrorAction
