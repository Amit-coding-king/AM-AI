import { Link, Outlet, useLocation } from 'react-router-dom';
import MicrophoneIcon from '../assets/microphone (1).png';
import SearchIcon from '../assets/up-arrow.png'
import Sidebar from '../assets/sidebar.png'
import { useState } from 'react';


const ChatPage = () => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false)
  const location = useLocation()


  const handleSidebar = () => {
    setisSidebarOpen(!isSidebarOpen)
  }

  return (
    <section className="flex w-full">
      <aside className={` ${isSidebarOpen ? "w-[300px]" : "w-24"} sidebar bg-[#F9F9F9] z-20 h-screen overflow-hidden duration-300`}>
        {
          isSidebarOpen ? (
            <>
              <div className="w-full flex justify-between items-center px-5 py-2">
                <h2 className='text-xl'>AIKOFTA</h2>
                <img className='w-6 cursor-pointer' src={Sidebar} alt="sidebar-icon" onClick={handleSidebar} />
              </div>
              <div className="h-full px-5 w-full py-5 flex flex-col gap-4 overflow-auto scroll-smooth">
                <Link to='/chat/1' className="py-2 px-4 bg-[#eeebeb] rounded-lg cursor-pointer text-xl font-medium">Chat 1</Link> 
                <Link to='/chat/2' className="py-2 px-4 bg-[#eeebeb] rounded-lg cursor-pointer text-xl font-medium">Chat 2</Link>      
              </div>
            </>
          ) : (
            <div className='h-full cursor-alias w-full px-5 py-2' onClick={handleSidebar}>
              Open
            </div>
          )
        }
      </aside>
      
      <main className="w-full flex flex-col gap-5 justify-center items-center p-3 h-screen overflow-hidden">
            {
              location.pathname === '/chat' ? (
                <>
                <h1 className="text-4xl font-semibold">Ask me anything except kofta!</h1>
                <div className="border rounded-lg p-3 flex justify-between items-center  bg-red-300">
                  <input type="text" placeholder="What's on your mind?" className="font-bold text-xl py-2 px-4 min-w-2xl border-none outline-none " />
                  <button className="text-xl p-2 mr-2  rounded-full bg-green-300 cursor-pointer">
                    <img src={MicrophoneIcon} alt="microphone-icon" className='w-10 ' />
                  </button>
                  <button className="text-xl p-2 mr-2 rounded-full bg-green-300 cursor-pointer">
                    <img src={SearchIcon} alt="search-icon" className='w-10' />
                  </button>
                </div>
                </>

              ) : (
                <Outlet />
              )
            }
      </main>
    </section>
  )
}

export default ChatPage