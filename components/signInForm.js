import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Form from './form'
import Flex from './flex'
import Input from './input'
import Button from './button'
import Text from './text'
import Link from './link'
import Checkbox from '../components/checkbox'

let SignInForm = () => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let router = useRouter()

  let handleSubmit = event => {
    event.preventDefault()

    axios
      .post(`${process.env.NEXT_PUBLIC_API_PATH}/login`, {
        email: email,
        password: password
      })
      .then(response => {
        localStorage.setItem('accessToken', response.data['access_token'])
        router.push('/entries')
      })
  }

  return (
    <Form
      onSubmit={handleSubmit}
      method="POST"
      action={`${process.env.NEXT_PUBLIC_API_PATH}/login`}
    >
      <Flex direction="col" space="sm">
        <Input
          name="email"
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoFocus
        />

        <Input
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <Text size="sm">
          <Flex justify="between">
            <Checkbox name="remember" label="Remember me" />
            <Link path="#">Forgot your password?</Link>
          </Flex>
        </Text>

        <Button type="submit" role="primary" text="Sign in" />

        <Text align="center" size="sm">
          <span>Don't have an account? </span>
          <Link path="/sign-up">Sign up</Link>
        </Text>
      </Flex>
    </Form>
  )
}

export default SignInForm
