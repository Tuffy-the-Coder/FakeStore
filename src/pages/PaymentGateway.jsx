import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function PaymentGateway() {

    const navigate = useNavigate();

    const [method, setMethod] = useState("card");

    const [cardDetails, setCardDetails] = useState({
        number: "",
        name: "",
        expiry: "",
        cvv: ""
    });

    const [upi, setUpi] = useState("");


    function handlePlaceOrder(e) {

        e.preventDefault();

        // fake validation
        if (method === "card" && !cardDetails.number) {
            alert("Enter card details");
            return;
        }

        if (method === "upi" && !upi) {
            alert("Enter UPI ID");
            return;
        }

        // success
        navigate("/");

    }


    return (


        <div className="bg-amber-50 w-[95%] lg:w-[50%] rounded-2xl p-5 font-[calibri]">


            {/* Title */}
            <h2 className="font-bold font-[arial] text-center text-3xl mb-5">
                Payment Method
            </h2>


            {/* Method selection */}
            <div className="flex gap-4 mb-6">

                <button
                    onClick={() => setMethod("card")}
                    className={`cursor-pointer px-4 py-2 rounded ${method === "card" ? "bg-amber-400 text-black" : "bg-gray-500"}`}>
                    Card
                </button>

                <button
                    onClick={() => setMethod("upi")}
                    className={`cursor-pointer px-4 py-2 rounded ${method === "upi" ? "bg-amber-400 text-black" : "bg-gray-500"}`}>
                    UPI
                </button>

                <button
                    onClick={() => setMethod("cod")}
                    className={`cursor-pointer px-4 py-2 rounded ${method === "cod" ? "bg-amber-400 text-black" : "bg-gray-500"}`}>
                    COD
                </button>

            </div>


            {/* Card form */}
            {method === "card" && (

                <div className="flex flex-col gap-3">

                    <input type="text" inputMode="tel" placeholder="Card Number" className="p-2 rounded text-black border"
                        value={cardDetails.number}
                        onChange={(e) =>
                            setCardDetails({
                                ...cardDetails,
                                number: e.target.value.replace(/\D/g, "")
                            })
                        }
                    />

                    <input type="text" placeholder="Name on Card" className="p-2 rounded text-black border"
                        value={cardDetails.name}
                        onChange={(e) =>
                            setCardDetails({
                                ...cardDetails,
                                name: e.target.value
                            })
                        }
                    />

                    <div className="flex gap-3">

                        <input type="month" placeholder="Expiry" className="p-2 rounded text-black w-full border"
                            value={cardDetails.expiry}
                            onChange={(e) =>
                                setCardDetails({
                                    ...cardDetails,
                                    expiry: e.target.value
                                })
                            }
                        />

                        <input type="text" placeholder="CVV" className="p-2 rounded text-black w-full border"
                            value={cardDetails.cvv}
                            onChange={(e) =>
                                setCardDetails({
                                    ...cardDetails,
                                    cvv: e.target.value
                                })
                            }
                        />

                    </div>

                </div>

            )}


            {/* UPI */}
            {method === "upi" && (

                <input type="text" placeholder="Enter UPI ID" className="p-2 rounded text-black w-full border"
                    value={upi}
                    onChange={(e) => setUpi(e.target.value)}
                />

            )}


            {/* COD */}
            {method === "cod" && (

                <p className="text-green-400">
                    Pay when product is delivered.
                </p>

            )}


            {/* Place Order */}
            <button
                onClick={handlePlaceOrder}
                className="mt-6 w-full bg-green-500 text-black py-2 rounded cursor-pointer hover:brightness-90"
            >
                Place Order
            </button>

        </div>

    );
}