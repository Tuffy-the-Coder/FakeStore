import { Link } from "react-router-dom"
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
    return (
        <div className="flex justify-between p-2 bg-gradient-to-br from-gray-800 to-black text-amber-100 w-full sticky top-0">
            <h2 className="text-2xl">FakeStore</h2>
            <div className="justify-between flex gap-7">
                <Link to="/">
                    <button className="h-10 w-20 cursor-pointer hover:border-amber-50 hover:border-2 active:scale-90 active:border-amber-200 active:text-amber-200">
                        Home
                    </button>
                </Link>
                <Link to="/About">
                    <button className="h-10 w-20 cursor-pointer hover:border-amber-50 hover:border-2 active:scale-90 active:border-amber-200"> About</button>
                </Link>
                <Link to="/Products">
                    <button className="h-10 w-20 cursor-pointer hover:border-amber-50 hover:border-2 active:scale-90 active:border-amber-200">Products</button>
                </Link>
                <Link to="/Cart">
                    <div classname="relative">
                        <span className="absolute right-10 top-3 text-white font-bold text-1.5xl font-[calibri]">0</span>
                        <button className="h-10 w-20 text-[2.5rem] flex justify-center items-center cursor-pointer hover:border-amber-50 hover:border-2 active:scale-90 active:border-amber-200"><IoCartOutline className="" /></button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar