import React from 'react'
import { IoPerson } from "react-icons/io5";
import useConversationStore from '../../zustand/useConversation';

const Conversation = ({conversation,lastIndex,emoji}) => {

  const{selectedConversation,setSelectedConversation} = useConversationStore();

  const isSelected = selectedConversation?._id === conversation._id
  return (
   <>
   <div className={`flex items-center gap-2 rounded p-2 py-1 hover:bg-sky-500`
   + (isSelected ? " bg-sky-500" : "")}
   onClick={()=> setSelectedConversation(conversation)}
   >
    <div className='avatar online'>
    <div className="w-12 rounded-full">
    <img src={conversation.profilePic} />
  </div>
    </div>

    <div className='flex flex-col flex-1'>
     <div className='flex gap-2 justify-between'>
     <p className='font-bold text-gray-200'>{conversation.username}</p>
     <span>{emoji}</span>
     </div>
    </div>
   </div>
   <div>

   </div>
   <div className={`divider py-0 my-0 h-1 ${lastIndex ? 'hidden' : ''}`}></div>
   </>
  )
}

export default Conversation

// STARTER CODE OF CONVERSATION
// import React from 'react'
// import { IoPerson } from "react-icons/io5";

// const Conversation = () => {
//   return (
//    <>
//    <div className='flex items-center gap-2 rounded p-2 py-1 hover:bg-sky-500'>
//     <div className='avatar online'>
//     <div className="w-12 rounded-full">
//     <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//   </div>
//     </div>

//     <div className='flex flex-col flex-1'>
//      <div className='flex gap-2 justify-between'>
//      <p className='font-bold text-gray-200'>Franklin</p>
//      <span>😍</span>
//      </div>
//     </div>
//    </div>
//    <div>

//    </div>
//    <div className='divider py-0 my-0 h-1'></div>
//    </>
//   )
// }

// export default Conversation