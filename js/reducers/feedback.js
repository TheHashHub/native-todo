import { SHOW_INFO, SHOW_ERROR, CLEAR_INFO, SHOW_LOADING, STOP_LOADING } from '../actions/feedback'

const initState = {
  info: [],
  error: [],
  loading: false,
}

export default (feedbackReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_INFO:
      return {
        ...state,
        info: action.info,
      }

    case CLEAR_INFO:
      return {
        ...state,
      }

    case SHOW_LOADING:
      return {
        ...state,
        loading: true,
      }

    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
})
