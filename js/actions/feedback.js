export const SHOW_INFO = 'SHOW_INFO'
export const SHOW_ERROR = 'SHOW_ERROR'
export const CLEAR_INFO = 'CLEAR_INFO'
export const SHOW_LOADING = 'SHOW_LOADING'
export const STOP_LOADING = 'STOP_LOADING'

// Error and Info Popups

export const showInfo = info => {
  console.info(info)
  return dispatch => {
    dispatch({
      type: SHOW_INFO,
      info,
    })
    setTimeout(() => {
      dispatch(clearInfo())
    }, 5000)
  }
}

export const showError = error => {
  console.log(error)
  return dispatch => {
    dispatch({
      type: SHOW_ERROR,
      error,
    })
    setTimeout(() => {
      dispatch(clearInfo())
    }, 5000)
  }
}

export const clearInfo = () => {
  return {
    type: CLEAR_INFO,
  }
}

// Loading Icon Actions

export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  }
}

export const stopLoading = () => {
  return {
    type: STOP_LOADING,
  }
}
