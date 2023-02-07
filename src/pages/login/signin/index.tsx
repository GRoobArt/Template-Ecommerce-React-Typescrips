import useChange from '../../../hook/usechange'

const SignIn = () => {
  const [inputType, setInputType] = useChange('password', 'text')

  const submit = (e: Event) => {
    e.preventDefault()
  }

  return (
    <section className='layout-flex login'>
      <div className='form-container'>
        <h3 className='form-title'>Create a new user</h3>
        <form
          className='signin'
          onSubmit={() => {
            submit
          }}>
          <div className='field'>
            <label htmlFor='firstname'>
              name
              <input
                id='firstname'
                name='firstname'
                type='text'
                placeholder='name'
              />
            </label>
          </div>
          <div className='field'>
            <label htmlFor='lastname'>
              lastname
              <input
                id='lastname'
                name='lastname'
                type='text'
                placeholder='lastname'
              />
            </label>
          </div>
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
                type={inputType.toString()}
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
                onClick={() => {
                  setInputType
                }}
              />
              Show Password
            </label>
          </div>
          <button type='submit' className='action-primary full'>
            Create account
          </button>
        </form>
      </div>
    </section>
  )
}

export default SignIn
