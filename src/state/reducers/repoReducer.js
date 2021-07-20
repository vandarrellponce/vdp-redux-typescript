const InitialState = {
  data: [],
  error: null,
  loading: false,
}

const reducer = (state = InitialState, action) => {
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
