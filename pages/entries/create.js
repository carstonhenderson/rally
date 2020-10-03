import React from 'react'
import BaseView from '../../views/baseView'
import Head from 'next/head'
import Text from '../../components/text'
import Space from '../../components/space'
import Form from '../../components/form'
import Flex from '../../components/flex'
import Select from '../../components/select'
import TextArea from '../../components/textArea'
import Button from '../../components/button'

const Create = () => (
  <BaseView title="Entries - Create">
    <Text size="3xl" weight="bold">
      How are you?
    </Text>

    <Space size="sm" />

    <Form method="post" action={`${process.env.NEXT_PUBLIC_API_PATH}/entries`}>
      <Flex direction="col" space="sm">
        <Select name="mood" required autoFocus>
          <option value="great">Great 😁</option>
          <option value="good">Good 🙂</option>
          <option value="okay">Okay 😐</option>
          <option value="bad">Bad 🙁</option>
          <option value="terrible">Terrible 😔</option>
        </Select>

        <TextArea name="notes" placeholder="This is what happened..." />

        <Select name="notes" multiple>
          <optgroup label="Positive">
            <option>Happy</option>
          </optgroup>

          <optgroup label="Negative">
            <option>Sad</option>
          </optgroup>
        </Select>
        <Button type="submit" role="primary" text="Create entry" />
      </Flex>
    </Form>
  </BaseView>
)

export default Create
