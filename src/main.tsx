import ReactDOM from 'react-dom/client'
import App from './App'

// Modules
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Styles
import './web/_global.less'
import 'normalize.css'

// Pages
import AllCategory from './pages/categories'
import ErrorPage from './pages/errorpage'
import MyAccount from './pages/myaccount'
import SignIn from './pages/login/signin'
import SignUp from './pages/login/singup'
import PasswordReset from './pages/login/password'
import RecoveryPassword from './pages/login/password-recovery'
import EditForms from './pages/myaccount/formedit'
import SendEmail from './pages/login/password-email'
import HomePage from './pages/homepage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage />} />
        <Route path=':id' element={<AllCategory />} />
      </Route>
      <Route path='/account' element={<App />}>
        <Route index element={<MyAccount />} />
        <Route path='edit' element={<EditForms />} />
        <Route path='registed' element={<SignIn />} />
        <Route path='login' element={<SignUp />} />
        <Route path='password' element={<PasswordReset />} />
        <Route path='password/recovery' element={<RecoveryPassword />} />
        <Route path='password/email' element={<SendEmail />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
)
