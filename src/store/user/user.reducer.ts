import { UserData } from '../../utils/firebase/firebase.utils'
import { AnyAction } from 'redux'
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed
} from './user.action'

export type UserState = {
  readonly currentUser: UserData | null
  readonly isLoading: boolean
  readonly error: Error | null
}

const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null
}

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction): UserState => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
      error: null
    }
  }
  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
      error: null
    }
  }
  if (signOutFailed.match(action) || signUpFailed.match(action) || signInFailed.match(action)) {
    return {
      ...state,
      error: action.payload
    }
  }
  return state
}
