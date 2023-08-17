import { useState } from 'react'
import { Container, TextField, Button } from "@mui/material"

import "./Register.scss"

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      name,
      email,
      password,
      password2
    }
  }

  const onReset = () => setFormData({ name: '', email: '', password: '', password2: '' })

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
            <TextField label="Enter username" variant="outlined" type='text' className='form-control' id='name' name='name' value={name} onChange={onChange}/>
          </div>
          <br></br>
          <div>
            <TextField label="Enter email" variant="outlined" type='email' className='form-control' id='email' name='email' value={email} onChange={onChange}/>
          </div>
          <br></br>
          <div>
            <TextField label="Enter password" variant="outlined" type='password' className='form-control' id='password' name='password' value={password} onChange={onChange}/>
          </div>
          <br></br>
          <div>
            <TextField label="Confirm password" variant="outlined" type='password' className='form-control' id='password2' name='password2' value={password2} onChange={onChange}/>
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

export default Register