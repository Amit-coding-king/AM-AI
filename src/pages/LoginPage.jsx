import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

const LoginPage = () => {
  return (
    <section className="w-full flex flex-col items-center py-15">
      <h1 className="text-6xl font-bold">AmAI</h1>
      <form className=" p-4 mt-5 flex flex-col gap-4 w-[350px] rounded-2xl shadow-lg">
        <input type="email" placeholder="Enter your email" className="py-2 px-4 outline-none bg-gray-300 w-full text-black" />
        <input type="password" placeholder="Enter your password" className="py-2 px-4 outline-none bg-gray-300 w-full text-black"/>
        <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
        <button type="submit" className="py-2 px-4 bg-amber-300 cursor-pointer text-xl">Login</button>
      </form>
    </section>
  )
}

export default LoginPage