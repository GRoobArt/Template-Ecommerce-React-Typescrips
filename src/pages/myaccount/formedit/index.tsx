const EditForms = () => {
  const submit = (e) => {
    e.preventDefault()
  }
  return (
    <section className='layout-flex login'>
      <div className='form-container'>
        <h4 className='form-title'>My account</h4>
        <form className='signin' onSubmit={submit}>
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
                type='password'
                placeholder='********'
              />
            </label>
          </div>
          <button type='submit' className='action-primary full'>
            Save
          </button>
        </form>
      </div>
    </section>
  )
}

export default EditForms
