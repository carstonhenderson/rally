import React, { useState } from 'react'
import Form from './form'
import Flex from './flex'
import Input from './input'
import Button from './button'
import Text from './text'
import Link from './link'
import axios from 'axios'

let RegistrationForm = () => {
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [passwordConfirmation, setPasswordConfirmation] = useState('')

  let handleSubmit = event => {
    event.preventDefault()

    axios
      .post(`${process.env.NEXT_PUBLIC_API_PATH}/register`, {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      })
      .then(response => {
        console.log(response)
      })
  }

  return (
    <Form
      onSubmit={handleSubmit}
      method="POST"
      action={`${process.env.NEXT_PUBLIC_API_PATH}/register`}
    >
      <Flex direction="col" space="sm">
        <Input
          name="name"
          label="Name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          autoFocus
        />

        <Input
          name="email"
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <Input
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <Input
          name="passwordConfirmation"
          label="Confirm password"
          type="password"
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
          required
        />

        <Button type="submit" role="primary" text="Sign up" />

        <Text align="center" size="sm">
          <span>Already have an account? </span>
          <Link path="/sign-in">Sign in</Link>
        </Text>
      </Flex>
    </Form>
  )
}

export default RegistrationForm
