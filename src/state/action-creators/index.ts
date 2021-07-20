import axios from 'axios'
import { ActionType } from '../action-types'
import { Action } from '../actions'

export const searchRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.SEARCH_START,
    })

    const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
      params: {
        text: term,
      },
    })

    const names = data.objects.map((result: any) => {
      return result.package.name
    })

    dispatch({
      type: ActionType.SEARCH_SUCCESS,
      payload: names,
    })

    try {
    } catch (error) {
      dispatch({ type: ActionType.SEARCH_ERROR, payload: error.message })
    }
  }
}
