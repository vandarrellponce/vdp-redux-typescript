import { ActionType } from '../action-types'
import { Action } from '../actions'

interface SampleState {
  data: string[]
  error: string | null
  loading: boolean
}

const reducer = (state: SampleState, action: Action): SampleState => {
  switch (action.type) {
    case ActionType.SEARCH_START:
      return { loading: true, error: null, data: [] }
    case ActionType.SEARCH_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.SEARCH_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default reducer
