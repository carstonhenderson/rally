import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import BaseView from '../../views/baseView'
import Head from 'next/head'
import Notification from '../../components/notification'
import Flex from '../../components/flex'
import Link from '../../components/link'
import ButtonLink from '../../components/buttonLink'
import Text from '../../components/text'
import Table from '../../components/table'
import TableHeader from '../../components/tableHeader'
import TableHeaderRow from '../../components/tableHeaderRow'
import TableHeaderData from '../../components/tableHeaderData'
import TableRow from '../../components/tableRow'
import TableBody from '../../components/tableBody'
import TableData from '../../components/tableData'

const Index = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_PATH}/entries`,
    async url => {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`
        }
      })

      return response.data.data
    }
  )

  const entries = data

  if (error) {
    return (
      <BaseView title="Entries">
        <div>failed to get entries :(</div>
      </BaseView>
    )
  } else if (!entries) {
    return (
      <BaseView title="Entries">
        <div>getting entries...</div>
      </BaseView>
    )
  }

  return (
    <BaseView title="Entries">
      <Flex direction="col" space="md">
        {/* <Notification text="Something happened!" role="info" /> */}

        <Flex justify="between" align="center">
          <Flex space="xs">
            <Text>
              <Text weight="bold">3</Text> entries
            </Text>
          </Flex>

          <ButtonLink
            path="/entries/create"
            role="secondary"
            text="Add entry"
          />
        </Flex>

        <Table>
          <TableHeader>
            <TableHeaderRow>
              <TableHeaderData align="left">Mood</TableHeaderData>
              <TableHeaderData>Notes</TableHeaderData>
              <TableHeaderData align="right">Date</TableHeaderData>
            </TableHeaderRow>
          </TableHeader>

          <TableBody>
            {entries.map((entry, index) => {
              return (
                <TableRow key={index}>
                  <TableData align="left">{entry.emoji}</TableData>

                  <TableData align="center" grow="2" truncate>
                    <Link path={`/entries/${entry.id}`}>{entry.notes}</Link>
                  </TableData>

                  <TableData align="right">
                    {new Date(entry.created_at).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short'
                    })}
                  </TableData>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Flex>

      {/* <div className="text-center">You don't have any entries yet!</div> */}
    </BaseView>
  )
}

export default Index
