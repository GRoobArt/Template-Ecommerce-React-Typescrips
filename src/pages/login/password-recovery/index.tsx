import { Link } from 'react-router-dom'

const RecoveryPassword = () => {
  const submit = (e: any) => {
    e.preventDefault()
  }

  return (
    <section className='layout-flex login'>
      <div className='form-container'>
        <h4 className='form-title'>Password recovery</h4>
        <p>Inform the email address used to create your account</p>
        <form className='recoverypassword' onSubmit={submit}>
          <div className='field'>
            <label htmlFor='password'>
              Email Address
              <input
                id='email'
                name='email'
                type='email'
                placeholder='user@email.com'
              />
            </label>
          </div>
          <button type='submit' className='action-primary full'>
            Submit
          </button>
          <Link
            to='/account/login'
            className='button action-link signin password'>
            Back to log in
          </Link>
        </form>
      </div>
    </section>
  )
}

export default RecoveryPassword
