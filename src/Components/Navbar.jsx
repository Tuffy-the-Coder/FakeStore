import { Link } from "react-router-dom"
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../App";

function Navbar() {
    const {cartItems, setCartItems} = useContext(CartContext);
    // console.log(cartItems);
    return (
        <div className="flex justify-between p-2 bg-gradient-to-br from-gray-800 to-black text-amber-100 w-full sticky top-0">
            <h2 className="text-[1rem] lg:text-2xl">FakeStore</h2>
            <div className="justify-between flex gap-8 lg:gap-10">
                <Link to="/">
                    <button className="h-6 w-12 lg:h-10 lg:w-20 cursor-pointer hover:border-amber-50 hover:border-2 active:scale-90 active:border-amber-200 active:text-amber-200">
                        Home
                    </button>
                </Link>
                <Link to="/About">
                    <button className="h-6 w-12 lg:h-10 lg:w-20 cursor-pointer hover:border-amber-50 hover:border-2 active:scale-90 active:border-amber-200"> About</button>
                </Link>
                <Link to="/Products">
                    <button className="h-6 w-12 lg:h-10 lg:w-20 cursor-pointer hover:border-amber-50 hover:border-2 active:scale-90 active:border-amber-200">Products</button>
                </Link>
                <Link to="/Cart">
                    <div className="relative h-6 w-12 lg:h-10 lg:w-20">
                        <span className="absolute left-[1.45rem] lg:left-[2.4rem] top-[0.22rem] lg:top-[0.4rem] text-white font-semibold  text-[0.5rem] lg:text-[0.8rem] font-[calibri]">{cartItems.length}</span>
                        <button className="h-6 w-12 lg:h-10 lg:w-20 text-[1.5rem] lg:text-[2.5rem] flex justify-center items-center cursor-pointer hover:border-amber-50 hover:border-2 active:scale-90 active:border-amber-200"><IoCartOutline className="" /></button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar