import React from 'react'
import BaseView from '../views/baseView'
import Head from 'next/head'
import Message from '../components/message'
import SignInForm from '../components/signInForm'

const SignIn = () => (
  <BaseView>
    <Head>
      <title>Sign in</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Message>Nice to see you 👋</Message>

    <SignInForm />
  </BaseView>
)

export default SignIn
