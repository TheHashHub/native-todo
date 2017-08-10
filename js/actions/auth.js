import { auth, users } from '../firebase'
import { showError, showInfo, showLoading, stopLoading } from './feedback'
import { Actions } from 'react-native-router-flux'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const init = () => {
  // Initialization actions initialized here
  // Function may be moved to another file
  return dispatch => {
    dispatch(initAuth())
  }
}

export const login = user => {
  return {
    type: LOGIN_USER,
    user,
  }
}

export const logout = () => {
  return {
    type: LOGOUT_USER,
  }
}

export const signupEmail = (emai, passwor, cpasswor) => {
  let email = emai.trim()
  let password = passwor.trim()
  let cpassword = cpasswor.trim()
  return dispatch => {
    if (password !== cpassword) {
      return dispatch(showError('Passwords do not match'))
    }
    dispatch(showLoading())
    // Signup user here
    auth.createUserWithEmailAndPassword(email, password).catch(err => {
      if (err) {
        dispatch(stopLoading())
        return dispatch(showError(err.message))
      }
    })
  }
}

export const loginEmail = (e, p) => {
  return dispatch => {
    dispatch(showLoading())
    let email = e.trim()
    let password = p.trim()
    // Login
    auth.signInWithEmailAndPassword(email, password).catch(err => {
      dispatch(showError(err.message))
      dispatch(stopLoading())
    })
  }
}

export const initAuth = () => {
  return dispatch => {
    // Auth changed listener here
    auth.onAuthStateChanged(user => {
      if (user) {
        // User signed in, check if new Signup
        users.child(user.uid).once('value').then(s => {
          if (!s.exists()) {
            // New signup, save data
            users
              .child(user.uid)
              .set({
                uid: user.uid,
                email: user.email,
              })
              .then(() => {
                // Redirect home
                users.child(user.uid).once('value').then(s => {
                  dispatch(stopLoading())
                  dispatch(login(s.val()))
                  Actions.home()
                })
              })
          } else {
            // user exists
            console.log('User Logged In')
            dispatch(stopLoading())
            dispatch(login(s.val()))
            Actions.home()
          }
        })
      } else {
        dispatch(logout())
        Actions.login()
      }
    })
  }
}
