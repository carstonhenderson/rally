import React from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import axios from 'axios'
import BaseView from '../../views/baseView'
import Flex from '../../components/flex'
import Space from '../../components/space'
import Text from '../../components/text'

const Entry = () => {
  const router = useRouter()
  let { entry } = router.query

  const { data, error } = useSWR(
    () => `${process.env.NEXT_PUBLIC_API_PATH}/entries/${entry}`,
    async url => {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`
        }
      })

      return response.data.data
    }
  )

  entry = data

  if (error) {
    return (
      <BaseView title="Entries">
        <div>failed to get entry :(</div>
      </BaseView>
    )
  } else if (!entry) {
    return (
      <BaseView title="Entries">
        <div>getting entry...</div>
      </BaseView>
    )
  }

  return (
    <BaseView title={`Entries | ${entry.id}`}>
      <Flex justify="between" align="center">
        <a
          href={`/entries/${entry.id}/edit`}
          className="text-blue-500 border border-blue-500 py-2 px-4 mb-2 rounded shadow float-right no-underline bg-transparent hover:bg-blue hover:text-white"
        >
          Edit entry
        </a>

        <form action={`/entries/${entry.id}`} method="POST">
          <button
            type="submit"
            className="text-red-500 border border-red-500 py-2 px-4 mb-2 rounded shadow float-right no-underline bg-transparent hover:bg-red hover:text-white"
          >
            Delete entry
          </button>
        </form>
      </Flex>

      <Space size="md" />

      <Flex justify="between" align="center">
        <Text size="3xl">{entry.emoji}</Text>

        <Text size="sm" italic>
          {new Date(entry.created_at).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </Text>
      </Flex>

      <Space size="sm" />

      <p>{entry.notes}</p>
    </BaseView>
  )
}

export default Entry
