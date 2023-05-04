import { useState } from 'react'

export const RegisterForm = () => {
  const [values, setValues] = useState({
    name: '',
    lastName: '',
    password: '',
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  console.log('register', values)

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <label htmlFor="lastName">LastName</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  )
}
