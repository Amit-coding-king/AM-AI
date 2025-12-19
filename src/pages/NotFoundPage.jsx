import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className='h-[80vh] w-full flex flex-col gap-10 justify-center items-center '>
        <h1 className='text-6xl'>404</h1>
        <h2 className='text-4xl'>Page Not Found</h2>
        <Link to='/' className='py-2 px-4 bg-blue-600 text-white'>Go To HomePage</Link>
    </section>
   
  )
}

export default NotFoundPage