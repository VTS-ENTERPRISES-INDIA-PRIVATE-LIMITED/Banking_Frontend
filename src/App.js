import React from 'react'
import EmailVerification from "./Components/EmailVerification/EmailVerification"
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword"
import PasswordReset from "./Components/PasswordReset/PasswordReset"
const App = () => {
  return (
    <div>
      <EmailVerification />
      <ForgotPassword />
      <PasswordReset />
    </div>
  )
}

export default App
