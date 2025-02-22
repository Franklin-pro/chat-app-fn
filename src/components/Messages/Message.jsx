import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX%3D&w=1000&q=80" alt="" />
            </div>
        </div>
        <div className="chat-bubble text-white bg-blue-500">Hi! What's up?</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>
  )
}

export default Message