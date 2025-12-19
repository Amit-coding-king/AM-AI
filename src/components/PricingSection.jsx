import Check from '../assets/check.png'

const PricingSection = () => {
  return (
        <section className='w-full overflow-hidden p-10 flex flex-col items-center'>
            <h1 className='text-center text-4xl'>Get Started with AmAI by today</h1>
            <span className=' text-black text-2xl my-5 cursor-pointer py-2 px-4 rounded-4xl hover:bg-gray-400 hover:text-white'>View pricing plans</span>
            <div className='w-full flex gap-10'>
                <div className='w-1/3 flex flex-col justify-between gap-5  border-2 rounded-lg p-5'>
                    <div>
                        <h3 className='text-4xl font-medium '>Free</h3>
                        <p className='mt-3'>Explore how AI can help with everyday tasks</p>
                        <ul className='mt-3'>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Access to GPT-4.1 mini</span></li>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Real-time data from the web with search</span></li>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Limited access to GPT-4o, OpenAI o4-mini, and deep research</span></li>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Limited access to file uploads, data analysis, image generation, and voice mode</span></li>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Code edits with the ChatGPT desktop app for macOS</span></li>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Use custom GPTs</span></li>
                        </ul>
                    </div>
                    <div>
                        <p className='mt-4 text-2xl mb-2'>$0 /month</p>
                        <button className='bg-yellow-400 py-1 px-4 border-none cursor-pointer hover:scale-105 active:scale-100 transition-all'>Get Free</button>
                    </div>
                </div>
                <div className='w-1/3 flex flex-col justify-between  gap-5  border-2 rounded-lg p-5'>
                    <div>
                        <h3 className='text-4xl font-medium '>Plus</h3>
                        <p className='mt-3'>Explore how AI can help with everyday tasks</p>
                        <ul className='mt-3'>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Access to GPT-4.1 mini</span></li>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Limited access to file uploads, data analysis, image generation, and voice mode</span></li>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Code edits with the ChatGPT desktop app for macOS</span></li>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Use custom GPTs</span></li>                            
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Real-time data from the web with search</span></li>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Limited access to GPT-4o, OpenAI o4-mini, and deep research</span></li>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Limited access to file uploads, data analysis, image generation, and voice mode</span></li>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Code edits with the ChatGPT desktop app for macOS</span></li>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Use custom GPTs</span></li>
                        </ul>
                    </div>
                    <div>
                        <p className='mt-4 text-2xl mb-2'>$20 /month</p>
                        <button className='bg-yellow-400 py-1 px-4 border-none cursor-pointer hover:scale-105 active:scale-100 transition-all'>Get Plus</button>
                    </div>
                </div>
                <div className='w-1/3 flex flex-col justify-between  gap-5  border-2 rounded-lg p-5'>
                    <div>
                        <h3 className='text-4xl font-medium '>Pro</h3>
                        <p className='mt-3'>Explore how AI can help with everyday tasks</p>
                        <ul className='mt-3'>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Access to GPT-4.1 mini</span></li>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Real-time data from the web with search</span></li>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Limited access to GPT-4o, OpenAI o4-mini, and deep research</span></li>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Limited access to file uploads, data analysis, image generation, and voice mode</span></li>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Code edits with the ChatGPT desktop app for macOS</span></li>
                            <li className='mt-2 flex items-start gap-2'><img src={Check} alt="check-icon" className='w-6 ' /><span>Use custom GPTs</span></li>
                        </ul>
                    </div>
                    <div>
                        <p className='mt-4 text-2xl mb-2'>$200 /month</p>
                        <button className='bg-yellow-400 py-1 px-4 border-none cursor-pointer hover:scale-105 active:scale-100 transition-all'>Get Pro</button>
                    </div>
                </div>                                
            </div>
        </section>
  )
}

export default PricingSection