import { useState } from 'react'

export const LoginForm = () => {
  // const [username, setUsername] = useState()
  // const [password, setPassword] = useState()
  const [values, setValues] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  console.log('login', values)

  return (
    <form>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={values.username}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  )
}
