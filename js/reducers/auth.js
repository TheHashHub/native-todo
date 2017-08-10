import { LOGIN_USER, LOGOUT_USER } from '../actions/auth'

const initAuthState = {
  authenticated: false,
  user: null,
}

export default (authReducer = (state = initAuthState, action) => {
  switch (action.type) {

    case LOGIN_USER:
      return {
        authenticated: true,
        user: action.user,
      }

    case LOGOUT_USER:
      return initAuthState

    default:
      return state
  }
})
