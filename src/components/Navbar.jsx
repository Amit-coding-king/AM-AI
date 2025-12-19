
import { Link } from "react-router-dom";


function Navbar({count_value}){
    return (
        <nav className="w-full flex justify-between items-center p-5">
            <h1 className="text-3xl">AmAI {count_value}</h1>
            <div className="flex gap-7 text-2xl">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/chat">Chat</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    )
}

export default Navbar;