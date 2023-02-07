import { Link } from 'react-router-dom'
import useChange from '../../../hook/usechange'

const SignUp = () => {
  const [inputType, setInputType] = useChange('password', 'text')

  const submit = (e) => {
    e.preventDefault()
  }
  return (
    <section className='layout-flex login'>
      <div className='form-container'>
        <form className='signup' onSubmit={submit}>
          <div className='field'>
            <label htmlFor='email'>
              email
              <input
                id='email'
                name='email'
                type='email'
                placeholder='user@email.com'
              />
            </label>
          </div>
          <div className='field'>
            <label htmlFor='password'>
              password
              <input
                id='password'
                name='password'
                type={inputType}
                placeholder='********'
              />
            </label>
          </div>
          <div className='field'>
            <label htmlFor='showpassword'>
              <input
                type='checkbox'
                name='showpassword'
                id='showpassword'
                onClick={setInputType}
              />
              Show Password
            </label>
          </div>
          <button type='submit' className='action-primary full'>
            Log in
          </button>
          <Link
            to='/account/password/recovery'
            className='button action-link password'>
            Forgot my password
          </Link>
          <Link
            to='/account/registed'
            className='button action-secondary signin'>
            Sign Up
          </Link>
        </form>
      </div>
    </section>
  )
}

export default SignUp
