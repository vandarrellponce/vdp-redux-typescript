interface SampleState {
  data: string[]
  error: string | null
  loading: boolean
}

interface SearchStartAction {
  type: 'start_search'
}

interface SearchSuccessAction {
  type: 'search_success'
  payload: string[]
}
interface SearchErrorAction {
  type: 'search_error'
  payload: string
}

const reducer = (
  state: SampleState,
  action: SearchStartAction | SearchSuccessAction | SearchErrorAction
): SampleState => {
  switch (action.type) {
    case 'start_search':
      return { loading: true, error: null, data: [] }
    case 'search_success':
      return { loading: false, error: null, data: action.payload }
    case 'search_error':
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default reducer
