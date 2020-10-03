import React from 'react'

const useLoader = (title, error, data) => {
  if (error)
    return (
      <BaseView title={title}>
        <div>failed to load</div>
      </BaseView>
    )

  if (!data)
    return (
      <BaseView title={title}>
        <div>loading...</div>
      </BaseView>
    )

  return false
}

export default useLoader
