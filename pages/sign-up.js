import React from 'react'
import BaseView from '../views/baseView'
import Head from 'next/head'
import Message from '../components/message'
import RegistrationForm from '../components/registrationForm'

const SignUp = () => (
  <BaseView>
    <Head>
      <title>Sign up</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Message>Nice to meet you! 🤝</Message>

    <RegistrationForm />
  </BaseView>
)

export default SignUp
