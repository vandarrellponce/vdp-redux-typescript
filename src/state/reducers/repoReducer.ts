interface SampleState {
  data: string[]
  error: string | null
  loading: boolean
}

enum ActionType {
  SEARCH_START = 'search_start',
  SEARCH_SUCCESS = 'search_success',
  SEARCH_ERROR = 'search_error',
}

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

type Action = SearchStartAction | SearchSuccessAction | SearchErrorAction

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
