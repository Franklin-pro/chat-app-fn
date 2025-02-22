import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSketon";
import Message from "./Message";

const Messages = () => {
	const { messages, loading } = useGetMessages();

	return (
		<div className='px-4 flex-1 overflow-auto flex flex-col gap-2'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<Message key={message._id} message={message} />
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};

export default Messages;
