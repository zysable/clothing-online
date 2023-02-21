import { AuthError, AuthErrorCodes } from 'firebase/auth'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { useDispatch } from 'react-redux'
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import { SignUpContainer } from './sign-in-form.styles'

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  const dispatch = useDispatch()

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = () => {
    dispatch(googleSignInStart())
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    try {
      dispatch(emailSignInStart(email, password))
      resetFormFields()
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert('incorrect password for email')
          break
        case AuthErrorCodes.USER_DELETED:
          alert('no user associated with this email')
          break
        default:
          console.error(error)
      }
    }
  }

  const handlerChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target
    setFormFields((pre) => ({ ...pre, [name]: value }))
  }

  return (
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          id="signin-email"
          label="Email"
          type="email"
          required
          onChange={handlerChange}
          name="email"
          value={email}
        />

        <FormInput
          id="signin-password"
          label="Password"
          type="password"
          required
          onChange={handlerChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.google} type="button" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </SignUpContainer>
  )
}
export default SignInForm
