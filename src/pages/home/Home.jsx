import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer from '../../components/Messages/MessageContainer'

const Home = () => {
  return (
    <div className='w-full flex sm:h-[458px] md:h-[558px] rounded-lg p-6 shadow-md bg-gray-400 bg-clip-padding
     backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar/>
      <MessageContainer/>
      </div>
  )
}

export default Home