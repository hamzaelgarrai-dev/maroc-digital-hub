
import { useSelector } from "react-redux"
import MessageCard from "./MessageCard";



function MessageList() {
  const { messages = [], loading, error } = useSelector(
    (state) => state.messages || {}
  );
   const sortedMessages = [...messages].reverse()

   if (loading) return <p className="text-center mt-10">Chargement...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (

    <section className='bg-[#F8F7FC] w-full min-h-screen mb-10 flex flex-col items-center justify-start'>

        <div className="flex justify-between items-start w-full max-w-[1050px]">

            <div className="flex flex-col justify-start pt-10 space-y-6 items-center w-full min-h-screen border border-gray-400 bg-white rounded-md shadow-md p-4 pb-8">

              {sortedMessages.map((msg) => (
        <MessageCard
          key={msg.id}
          name={msg.username}
          role={msg.role}
          message={msg.content}
        />
      ))}

         
            </div>


        </div>

        

    </section>

  )
}

export default MessageList