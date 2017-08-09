import {SHOW_ERROR} from '../actions'

function errorMessage (state = '', action) {
  switch (action.type) {
    case SHOW_ERROR:
      return action.errorMessage // = 'Failed to load'
    default:
      return state
  }
}

export default errorMessage
