import { Link } from "react-router-dom"

const SignupPage = () => {
  return (
    <section className="w-full flex flex-col items-center py-15">
      <h1 className="text-6xl font-bold">AmAI</h1>
      <form className=" p-4 mt-5 flex flex-col gap-4 w-[350px] rounded-2xl shadow-lg">
        <input type="text" placeholder="Enter your username" className="py-2 px-4 outline-none bg-gray-300 w-full text-black" />
        <input type="email" placeholder="Enter your email" className="py-2 px-4 outline-none bg-gray-300 w-full text-black" />
        <input type="password" placeholder="Enter your password" className="py-2 px-4 outline-none bg-gray-300 w-full text-black"/>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
        <button type="submit" className="py-2 px-4 bg-amber-300 cursor-pointer text-xl">Signup</button>
      </form>
    </section>
  )
}

export default SignupPage