import { useContext, useState } from "react"
import { CartContext } from "../App"
import RatingStars from "../Components/RatingStars";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";


function Cart() {

    const { cartItems, setCartItems } = useContext(CartContext);
    // console.log(cartItems);
    if (!cartItems.length) {
        return <div className="flex  gap-2 justify-center items-center h-[80.5vh] text-amber-50 text-5xl">Your cart is empty</div>
    }
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

    )

    // console.log(uniqueItems)

    function deleteItem(item) {
        setCartItems(prev => prev.filter(cardItem => {
            if (cardItem.id === item.id) {
                return false;
            }
            return true;
        }))
    }

    function increaseQty(item) {

        setCartItems(prev => [...prev, item]);
    }


    function decreaseQty(item) {

        setCartItems(prev => {

            let found = false;

            return prev.filter(cartItem => {

                if (!found && cartItem.id === item.id) {

                    found = true;
                    return false; // remove ONE occurrence

                }

                return true;

            });

        });

    }

    const subTotal = cartItems.reduce((acc, item) => {
        // console.log(acc, item.price);
        return acc + item.price;
    }, 0);

    // console.log(subTotal)

    return (
        <>
            <div className=" gap-5 flex flex-col p-5 justify-evenly items-center">
                <div className="bg-amber-50 w-60 rounded-2xl flex flex-wrap gap-2 p-3 fixed right-4 top-20">
                    <p>Subtotal ({cartItems.length === 1 ? `${cartItems.length} item` : `${cartItems.length} items`}): </p>
                    <p className="font-bold">${subTotal.toFixed(2)}</p>
                    <button className="w-full h-8 bg-orange-400 text-1xl rounded-2xl  font-['Calibri'] cursor-pointer hover:opacity-80 active:scale-90 active:opacity-60">Proceed to Buy</button>
                </div>
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
                                <p className="font-bold text-yellow-400 text-[1rem]">${(item.price * item.quantity).toFixed(2)}</p>

                                <div className=" text-yellow-300 text-[0.7rem] flex items-center gap-1">
                                    <RatingStars rating={item.rating} />
                                    ({item.rating.count})
                                </div>
                                <div className="flex gap-2 items-center text-[0.9rem]">
                                    <p className="text-amber-50 ">FREE delivery</p>
                                    <span className="text-white font-bold">{item.deliveryDate}</span>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <div className="h-8 w-30 border-2  border-amber-400 rounded-2xl text-amber-50 flex p-3 justify-between items-center hover:border-amber-600 ">
                                        <FaMinus className="cursor-pointer"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                decreaseQty(item);
                                            }} />
                                        <span className="text-[1.2rem] font-bold">{item.quantity}</span>
                                        <FaPlus className="cursor-pointer"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                increaseQty(item);
                                            }} />
                                    </div>
                                    <button className="h-8 w-20 border bg-red-400  rounded-2xl  font-['Calibri'] cursor-pointer hover:opacity-70 active:scale-90 active:opacity-60"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            deleteItem(item);
                                        }}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </>
    )
}

export default Cart
