import { Link, useParams } from 'react-router-dom'
import MicrophoneIcon from '../assets/microphone (1).png';
import SearchIcon from '../assets/up-arrow.png'
import { useState } from 'react';

const ChatComponent = () => {
   const { id } = useParams();
  const [user_input, setUserInput] = useState("");
  const [messages, setMessages] = useState(JSON.parse(localStorage.getItem(`chat_${id}`)) || []);
 

  function answerQuestions(question){
    if (["hello", "hi", "helo"].includes(question)){
      return "Heyy there! How can i help you?"
    } else if (["who created you", "who made you"].includes(question)){
      return "I am created by Dhruv Verma by using react."
    } else {
      return "Sorry i can't understand your question."
    }
  }

  function handleSubmit(e){
    e.preventDefault()

    if (!user_input.trim()) return;
    let lowercaseInput = user_input.toLowerCase()
    let bot_reply = answerQuestions(lowercaseInput)

    setMessages((prev) => [
      ...prev,
      {user: user_input, bot: bot_reply}
    ])

    localStorage.setItem(`chat_${id}`,JSON.stringify(messages))
    setUserInput('')
  }


  return (
    <section className='h-screen relative w-full overflow-hidden'>
      <div className='w-full p-4 flex justify-between '>
        <h2 className='text-xl cursor-pointer'>AiKofta</h2>
        <Link to='/chat' className='text-xl cursor-pointer'>Go to new chat</Link>
      </div>
      <div className='h-full w-full overflow-y-scroll flex flex-col items-center gap-5 p-5 pb-60'>
        {
          messages && messages.map((message, i) => (
            <div className='w-[450px] py-4 gap-5' key={i}>
              <div className='flex items-start gap-4'>
                <p className='h-10 w-10 flex items-center justify-center text-lg bg-amber-200 mb-5'>U</p>
                <p className='text-md w-[350px] break-words'>{message.user}</p>
              </div>
              <div className='flex items-start gap-4'>
                <p className='h-10 w-10 flex items-center justify-center text-lg bg-red-200 mb-5' >B</p>
                <p className='text-md w-[350px] break-words'>{message.bot}</p>
              </div>
            </div>
          ))
        }
      </div>
      <form onSubmit={handleSubmit} className="border rounded-lg p-3 flex items-center absolute bottom-10 left-1/2 -translate-x-1/2 w-[550px] search-form bg-white">
        <input type="text" value={user_input} onChange={(e) => setUserInput(e.target.value)} placeholder="What's on your mind?" className="w-full text-lg py-2 px-4 border-none outline-none pr-28" />
        <button className="text-xl p-2 absolute right-12 rounded-full  cursor-pointer">
          <img src={MicrophoneIcon} alt="microphone-icon" className='w-6' />
        </button>
        <button type='submit' className="text-xl absolute right-0 p-2 rounded-full cursor-pointer">
          <img src={SearchIcon} alt="search-icon" className='w-8' />
        </button>
      </form>
    </section>
  )
}

export default ChatComponent