import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import RatingStars from "./RatingStars";

function ItemCard(props) {
    return (
        <>
            <div className="w-80 h-88 border-2 border-amber-300 rounded-2xl flex flex-col overflow-hidden">
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

                    <div className="p-2 flex justify-between ">
                        <button className="w-25 h-7 bg-orange-400 rounded-2xl  font-['Calibri'] cursor-pointer hover:opacity-70 active:scale-90 active:opacity-60">Buy Now</button>
                        <button className="w-25 h-7 bg-yellow-300 rounded-2xl font-['Calibri'] cursor-pointer hover:opacity-70 active:scale-90 active:opacity-60">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}



export default ItemCard