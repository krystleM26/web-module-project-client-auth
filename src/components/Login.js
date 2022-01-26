import React from 'react'
import '../style.css'

const Login = () => {
  state: {
    credentials: {
      username: ''
      password: ''
    }
  }
  return (
    <div className="form">
      <form>
        <label>USERNAME:</label> <input type="text" name="name" />
        <label>Password:</label> <input type="password" name="password" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login
