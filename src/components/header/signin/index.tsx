import { NavLink } from 'react-router-dom'

const SignInButton = () => {
  return (
    <div className='account'>
      <div className='signin'>
        <NavLink className='button action-link' to='/account/registed'>
          Sign In
        </NavLink>
      </div>
      <div>
        <NavLink className='button action-link' to='/account/login'>
          Sign Up
        </NavLink>
      </div>
    </div>
  )
}

export default SignInButton
