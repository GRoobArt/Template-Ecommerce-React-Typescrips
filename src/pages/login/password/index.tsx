import { useState } from 'react'
import useChange from '../../../hook/usechange'

const PasswordReset = () => {
  const [inputType, setInputType] = useChange('password', 'text')

  const inputText = inputType.toString()

  const submit = (e: any) => {
    e.preventDefault()
  }

  return (
    <section className='layout-flex login'>
      <div className='form-container'>
        <h4 className='form-title'>Create a new password</h4>
        <p>Enter a new password for your account</p>
        <form className='resetpassord' onSubmit={submit}>
          <div className='field'>
            <label htmlFor='password'>
              Password
              <input id='password' type={inputText} placeholder='*********' />
            </label>
          </div>
          <div className='field'>
            <label htmlFor='repassword'>
              Re-enter password
              <input id='repassword' type={inputText} placeholder='*********' />
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
            Confirm new password
          </button>
        </form>
      </div>
    </section>
  )
}

export default PasswordReset
