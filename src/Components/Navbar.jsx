import { Link } from "react-router-dom"
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../App";

function Navbar() {
    const {cartItems, setCartItems} = useContext(CartContext);
    // console.log(cartItems);
    return (
        <div className="flex items-center justify-between p-2 bg-gradient-to-br from-gray-800 to-black text-amber-100 w-full sticky top-0">
            <h2 className="text-[1rem] lg:text-3xl">FakeStore</h2>
            <div className="justify-between flex gap-8 lg:gap-10 lg:text-2xl">
                <Link to="/">
                    <button className="h-6 w-12 lg:h-15 lg:w-25 cursor-pointer hover:border-amber-50 lg:hover:border-2 active:scale-90 lg:active:border-amber-200 active:text-amber-200">
                        Home
                    </button>
                </Link>
                <Link to="/About">
                    <button className="h-6 w-12 lg:h-15 lg:w-25 cursor-pointer hover:border-amber-50 lg:hover:border-2 active:scale-90 lg:active:border-amber-200"> About</button>
                </Link>
                <Link to="/Products">
                    <button className="h-6 w-12 lg:h-15 lg:w-25 cursor-pointer hover:border-amber-50 lg:hover:border-2 active:scale-90 lg:active:border-amber-200">Products</button>
                </Link>
                <Link to="/Cart">
                    <div className="relative h-6 w-12 lg:h-15 lg:w-25">
                        <span className="absolute left-[1.42rem] lg:left-[3rem] top-[0.29rem] lg:top-[1rem] text-white font-semibold  text-[0.45rem] lg:text-[0.9rem] font-[calibri]">{cartItems.length}</span>
                        <button className="h-6 w-12 lg:h-15 lg:w-25 text-[1.5rem] lg:text-[3rem] flex justify-center items-center cursor-pointer hover:border-amber-50 lg:hover:border-2 active:scale-90 lg:active:border-amber-200"><IoCartOutline className="" /></button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar