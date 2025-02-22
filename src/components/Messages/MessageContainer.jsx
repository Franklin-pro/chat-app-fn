import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const nochatSelected = true;
  return (
    <div className='w-full md:w-[70%] flex flex-col'>
        {nochatSelected ? (<NochatSelected/> ):( <>
        <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span>
            <span className='text-gray-900 font-bold'>jack joe</span>
        </div>
        <Messages/>
        <MessageInput/>
        </>)}
    </div>
  )
}

export default MessageContainer

const NochatSelected = () => {
    return (
      <div className='flex items-center justify-center w-full h-full'>
          <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
              <p>Welcome 👋Franklin</p>
              <p>Select a chat to start messaging</p>
              <TiMessages className='text-3xl md:text-6xl text-center'/>
          </div>
      </div>
    )
  }
  


// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'

// const MessageContainer = () => {
//   return (
//     <div className='w-full flex flex-col'>
//         <>
//       <div className='bg-slate-500 py-2 px-4 mb-2'>
//         <span className='label-text'>To:</span>
//         <span className='text-gray-900 font-bold'>jack joe</span>
//       </div>
//         <Messages/>
//         <MessageInput/>
//         </>
  
//     </div>
//   )
// }

// export default MessageContainer

// const NochatSelected = () => {
//     return (
//       <div className='flex items-center justify-center w-full h-full'>
//           <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
//               <p>Welcome 👋Franklin</p>
//               <p>Select a chat to start messaging</p>
//               <TiMessages className='text-3xl md:text-6xl text-center'/>
//           </div>
//       </div>
//     )
//   }