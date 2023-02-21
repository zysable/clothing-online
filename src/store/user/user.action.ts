import { Action, createAction, ActionWithPayload } from '../../utils/reducer/reducer.utils'
import { USER_ACTION_TYPES } from './user.type'
import { withMactcher } from '../../utils/reducer/reducer.utils'
import { UserData, AddtionalInformation } from '../../utils/firebase/firebase.utils'
import { User } from 'firebase/auth'

export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>
export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>
export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>
export type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>
export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>
export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AddtionalInformation }
>
export type SignUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>
export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>

export const setCurrentUser = withMactcher(
  (user: UserData): SetCurrentUser => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
)

export const checkUserSession = withMactcher(
  (): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
)

export const googleSignInStart = withMactcher(
  (): GoogleSignInStart => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
)

export const emailSignInStart = withMactcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
)

export const signInSuccess = withMactcher(
  (user: UserData & { id: string }): SignInSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
)

export const signInFailed = withMactcher(
  (error: Error): SignInFailed => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
)

export const signUpStart = withMactcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayName })
)

export const signUpSuccess = withMactcher(
  (user: User, additionalDetails: AddtionalInformation): SignUpSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })
)

export const signUpFailed = withMactcher(
  (error: Error): SignUpFailed => createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
)

export const signOutStart = withMactcher(
  (): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START)
)

export const signOutSuccess = withMactcher(
  (): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
)

export const signOutFailed = withMactcher(
  (error: Error): SignOutFailed => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
)
