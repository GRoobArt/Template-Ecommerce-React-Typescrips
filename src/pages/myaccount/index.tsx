import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserInterface } from '../../interface/interfaces'

const MyAccount = () => {
  const Navigation = useNavigate()

  const [user, setUser] = useState({
    firstname: 'jose',
    lastname: 'Chacon',
    email: 'rbert.g.ch@gmail.com',
    password: '********',
  })

  const editUser = () => {
    Navigation('/account/edit')
  }

  return (
    <section className='layout-flex account'>
      <div className='myaccount'>
        <div className='userdata'>
          <h4 className='title'>name</h4>
          <p>{`${user.firstname} ${user.lastname}`}</p>
        </div>
        <div className='userdata'>
          <h4 className='title'>Email Address</h4>
          <p>{user.email}</p>
        </div>
        <div className='userdata'>
          <h4 className='title'>Password</h4>
          <p>{user.password}</p>
        </div>
        <button className='action-secondary full edit' onClick={editUser}>
          edit
        </button>
      </div>
    </section>
  )
}

export default MyAccount
