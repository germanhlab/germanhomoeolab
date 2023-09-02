import LoaderCards from '@components/LoaderCards'
import React from 'react'


const Loading = () => {
  return (
    <div className="w-full p-5 flex flex-wrap justify-center items-center">
      <LoaderCards />
      <LoaderCards />
      <LoaderCards />
      <LoaderCards />
      <LoaderCards />
      <LoaderCards />
      <LoaderCards />
      <LoaderCards />
    </div>
  )
}

export default Loading