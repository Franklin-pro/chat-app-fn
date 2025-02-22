import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
  return (
    <div className='flex flex-col overflow-auto pb-5'>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </div>
  )
}

export default Conversations