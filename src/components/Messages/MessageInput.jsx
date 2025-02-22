import React from 'react'
import { BiSend } from 'react-icons/bi'
const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='relative'>
        <input type="text" placeholder='send message' className='border text-sm border-gray-500 rounded-lg block p-2 w-full' />
        <button className='absolute inset-y-0 end-0 flex items-center pe-3 right-0'> 
<BiSend/>
        </button>
        </div>
    </form>
  )
}
export default MessageInput


// STARTER CODE FOR INPUT MESSAGE
// 

// import React from 'react'
// import { BiSend } from 'react-icons/bi'
// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div>
//         <input type="text" placeholder='send message' className='border text-sm border-gray-500 rounded-lg block p-2 w-full' />
//         <button>
// <BiSend/>
//         </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput