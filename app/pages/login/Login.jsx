import { useState } from 'react'
import { Container, TextField, Button } from "@mui/material"

import "./Login.scss"

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }
  }

  const onReset = () => setFormData({ email: '', password: '' })

  return (
    <Container>

      <section className='form'>
      <section className='heading'>
        <h1>
          Login
        </h1>
        <p>Login and start setting goals</p>
      </section>
        <form onSubmit={onSubmit}>
          <div>
            <TextField label="Enter Email" variant="outlined" type='email' className='form-control' id='email' name='email' value={email} onChange={onChange}/>
          </div>
          <br></br>
          <div>
            <TextField label="Enter password" variant="outlined" type='password' className='form-control' id='password' name='password' value={password} onChange={onChange}/>
          </div>
          <div className='form-group'>
            <Button variant="Contained" id="submitButton">Submit</Button>
            <Button variant="Contained" id="resetButton" onClick={onReset}>Reset</Button>
          </div>
        </form>
      </section>
    </Container>
  )
}

export default Login