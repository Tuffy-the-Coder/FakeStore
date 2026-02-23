import RatingStars from "./RatingStars";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../App";


function ItemCard(props) {
    
    const { cartItems, setCartItems } = useContext(CartContext);
    function updateCart() {
        const copyCart = [...cartItems];
        copyCart.push(props)
        setCartItems(copyCart);
        // console.log(cartItems);

    }
    function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}
    // console.log(props);
    return (
        <>

            <div className="w-80 h-88 border-2 border-amber-300 rounded-2xl flex flex-col overflow-hidden hover:border-amber-500 cursor-pointer">
                
                <Link to={`/Item/${createSlug(props.title)}/${props.id}`}>

                    <img
                        src={props.image}
                        alt={props.title}
                        className="w-full h-48 object-contain bg-amber-100 p-4" />
                    <div className="p-1">
                        <p className="text-blue-100 text-[1rem] line-clamp-1 font-bold">{props.title}</p>
                        <p className="text-blue-100 text-[0.8rem] line-clamp-2">{props.description}</p>
                        <p className="font-bold text-yellow-400 text-[1rem]">${props.price}</p>

                        <div className=" text-yellow-300 text-[0.8rem] flex items-center gap-1">
                            <RatingStars rating={props.rating} />
                            ({props.rating.count})
                        </div>

                    </div>

                </Link>

                <div className="p-2 flex justify-between ">
                    <Link to={`/Checkout/DeliveryDetails`}>
                    <button className="w-25 h-7 bg-orange-400 rounded-2xl  font-['Calibri'] cursor-pointer hover:opacity-70 active:scale-90 active:opacity-60">
                        Buy Now
                        </button>
                    </Link>
                    <button className="w-25 h-7 bg-yellow-300 rounded-2xl font-['Calibri'] cursor-pointer hover:opacity-70 active:scale-90 active:opacity-60"
                            onClick={updateCart}
                    >Add to Cart</button>
                </div>

            </div >

        </>
    )
}



export default ItemCard