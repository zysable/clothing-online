import { ChangeEventHandler, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUpStart } from '../../store/user/user.action'
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import { SignUpContainer } from './sign-up-form.styles'
import { AuthError, AuthErrorCodes } from 'firebase/auth'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const dispatch = useDispatch()

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('Password do not match')
      return
    }
    try {
      dispatch(signUpStart(email, password, displayName))
      resetFormFields()
    } catch (err) {
      if ((err as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Cannot create user, email already in use')
      } else {
        console.error('User creation encountered an error: ', err)
      }
    }
  }

  const handlerChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target
    setFormFields((pre) => ({ ...pre, [name]: value }))
  }

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          id="displayName"
          label="Diplay Name"
          type="text"
          required
          onChange={handlerChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          id="email"
          label="Email"
          type="email"
          required
          onChange={handlerChange}
          name="email"
          value={email}
        />

        <FormInput
          id="password"
          label="Password"
          type="password"
          required
          onChange={handlerChange}
          name="password"
          value={password}
        />

        <FormInput
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          required
          onChange={handlerChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button>Sign Up</Button>
      </form>
    </SignUpContainer>
  )
}
export default SignUpForm
