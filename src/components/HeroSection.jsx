import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <section className='w-full gap-8 flex justify-center items-center flex-col h-80'>
        <h1 className='text-6xl'>Best AI Tool For Personalized Results</h1>
        <Link to='/chat' className='bg-yellow-400 hover:scale-105 active:scale-100 transition-all text-xl rounded-lg py-2 px-4'>Get Started For Free</Link>
    </section>
  )
}

export default HeroSection