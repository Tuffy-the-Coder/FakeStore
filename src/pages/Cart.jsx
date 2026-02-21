import { useContext, useRef } from "react"
import { CartContext } from "../App"
import RatingStars from "../Components/RatingStars";
import { Link } from "react-router-dom";


function Cart() {

    const { cartItems, setCartItems } = useContext(CartContext);
    const uniqueItems = Object.values(

        cartItems.reduce((acc, item) => {

            const date = new Date();
            date.setDate(item.id < 7 ? date.getDate() + item.id : date.getDate() + 7);
            if (acc[item.id]) {

                acc[item.id].quantity += 1;

            } else {

                acc[item.id] = {
                    ...item,
                    quantity: 1,
                    deliveryDate: date.toLocaleDateString('en-GB', {
                        weekday: 'long', // "Monday"
                        day: 'numeric',  // "23"
                        month: 'short',  // "Feb"
                    })
                };

            }

            return acc;

        }, {})

    );
    // console.log(uniqueItems)






    return (
        <>
            <div className=" gap-5 flex flex-col p-5 justify-evenly">
                {uniqueItems.map(item => (
                    <Link to={`/Item/${item.title}`} key={item.id}>
                        <div className="w-140 h-50 flex flex-row  overflow-hidden border-2 border-amber-300 rounded-2xl  hover:border-amber-500 cursor-pointer">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-50 h-50 bg-amber-100 p-4 object-contain shrink-0" />
                            <div className="p-3 gap-1 flex flex-col">
                                <p className="text-blue-100 text-[0.9rem] line-clamp-1 font-bold">{item.title}</p>
                                <p className="text-blue-100 text-[0.7rem] line-clamp-2">{item.description}</p>
                                <p className="font-bold text-yellow-400 text-[0.9rem]">${item.price}</p>

                                <div className=" text-yellow-300 text-[0.7rem] flex items-center gap-1">
                                    <RatingStars rating={item.rating} />
                                    ({item.rating.count})
                                </div>
                                <div className="flex gap-2 items-center text-[0.9rem]">
                                    <p className="text-amber-50 ">FREE delivery</p>
                                    <span className="text-white font-bold">{item.deliveryDate}</span>
                                </div>
                                <div className="flex justify-between">
                                <div className="h-8 w-30 border-1 border-amber-400 rounded-2xl"></div>
                                <button className="h-8 w-20 border-1 bg-red-400  rounded-2xl  font-['Calibri'] cursor-pointer hover:opacity-70 active:scale-90 active:opacity-60">Delete</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className=""></div>
        </>
    )
}

export default Cart
