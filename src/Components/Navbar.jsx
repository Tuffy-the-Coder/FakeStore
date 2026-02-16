import { Link } from "react-router-dom"

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
                    <button className="h-10 w-20 cursor-pointer hover:border-amber-50 hover:border-2 active:scale-90 active:border-amber-200">Cart</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar