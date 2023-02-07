import { Link, useNavigate } from 'react-router-dom'
import { IconsEmail } from '../../../variables'

const SendEmail = () => {
  const Navigation = useNavigate()

  const UserLogin = () => {
    Navigation('/account/login')
  }

  return (
    <section className='layout-flex emailsent'>
      <div className='emailpassoword'>
        <div className='header'>
          <h4 className='title'>Email has been sent!</h4>
          <p>
            Please check your inbox for instructions on how to reset the
            password
          </p>
        </div>
        <div className='banner sendemail'>
          <IconsEmail />
        </div>
        <button className='action-primary full' onClick={UserLogin}>
          Login
        </button>
        <p>
          Didn’t receive the email?
          <Link className='button action-link resend' to='#'>
            Resend
          </Link>
        </p>
      </div>
    </section>
  )
}

export default SendEmail
