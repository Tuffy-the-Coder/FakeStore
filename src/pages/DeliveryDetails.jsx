import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DeliveryDetails() {

    const navigate = useNavigate();

    const [countries, setCountires] = useState([]);
    const [deliveryDetails, setDeliveryDetails] = useState({
        fName: "",
        lName: "",
        country: "India",
        state: "",
        city: "",
        pincode: "",
        number: "",
        house: "",
        area: "",
        landmark: "",
    })
    const [deliveryInstructions, setDeliveryInstructions] = useState("");

    useEffect(() => {
        async function fetchCountries() {
            const res = await fetch(
                "https://restcountries.com/v3.1/all?fields=name,cca2,flags"
            );
            const data = await res.json();
            // console.log(data);
            setCountires(prev => [...data].sort((a, b) => {
                return a.name.common.localeCompare(b.name.common);
            }));
        }
        fetchCountries();
    }, [])

    async function fetchAddress(pincode) {

        const res = await fetch(
            `https://api.postalpincode.in/pincode/${pincode}`
        );

        const data = await res.json();

        const post = data[0].PostOffice[0];

        setDeliveryDetails(prev => ({
            ...prev,
            country: post.Country,
            state: post.State,
            city: post.District
        }))
    }

    // console.log(country);

    return (
        <form className="bg-amber-50 w-[90%] lg:w-[50%] rounded-2xl p-5 font-[calibri]"
            onSubmit={(e) => {
                e.preventDefault();
                for (const key in deliveryDetails) {
                    if (deliveryDetails[key] === "") {
                        alert("Fill all details");
                        return;
                    }
                }
                if (deliveryDetails.number.length < 10) {
                    alert("Invalid number");
                    return;
                }
                navigate(`/Checkout/PaymentGateway`);
            }}>
            {/* delivery address */}
            <section className="flex flex-col p-2 gap-2">
                <h1 className="font-bold font-[arial] text-center text-3xl mb-2">Add an address</h1>
                <div className="lg:flex gap-2">
                    <div>
                        <p>
                            First Name
                        </p>
                        <input type="text" placeholder="" className="border-black border-2 rounded-[5px] pl-1 w-[180px]"
                            value={deliveryDetails.fName}
                            onChange={(e) =>
                                setDeliveryDetails(prev => ({
                                    ...prev,
                                    fName: e.target.value
                                }))
                            } />
                    </div>
                    <div>
                        <p>
                            Last Name
                        </p>
                        <input type="text" placeholder="" className="border-black border-2 rounded-[5px] pl-1 w-[180px] "
                            value={deliveryDetails.lName}
                            onChange={(e) =>
                                setDeliveryDetails(prev => ({
                                    ...prev,
                                    lName: e.target.value
                                }))
                            } />
                    </div>
                </div>
                <div>
                    <p>
                        Country/Region
                    </p>
                    <select className="border-black border-2 rounded-[5px] pl-1 w-[180px] cursor-pointer"
                        value={deliveryDetails.country}
                        onChange={(e) => setDeliveryDetails({ ...deliveryDetails, country: e.target.value })}>
                        {countries.map(country => (
                            <option key={country.name.common}> {country.name.common}</option>
                        ))}
                    </select>

                </div>
                <div>
                    <p>
                        Mobile number
                    </p>
                    <input type="text" inputMode="tel" placeholder="" className="border-black border-2 rounded-[5px] pl-1 w-[180px]"
                        value={deliveryDetails.number}
                        onChange={(e) => {
                            if (e.target.value.length > 10) return
                            setDeliveryDetails({ ...deliveryDetails, number: e.target.value.replace(/\D/g, "") })
                        }} />
                </div>
                <div>
                    <p>
                        PinCode
                    </p>
                    <input type="text" inputMode="tel" placeholder="E.g. 248001" className="border-black border-2 rounded-[5px] pl-1 w-[180px]"
                        value={deliveryDetails.pincode}
                        onChange={(e) => {
                            String(e.target.value).length >= 6 ? fetchAddress(e.target.value.replace(/\D/g, "")) : "";
                            setDeliveryDetails({ ...deliveryDetails, pincode: e.target.value.replace(/\D/g, "") });
                        }} />
                </div>
                <div><p>
                    Flat, House no., Building, Company, Apartment
                </p>
                    <input type="text" placeholder="" className="border-black border-2 rounded-[5px] pl-1 w-[270px]"
                        value={deliveryDetails.house}
                        onChange={(e) =>
                            setDeliveryDetails(prev => ({
                                ...prev,
                                house: e.target.value
                            }))
                        } />
                </div>
                <div className="lg:flex gap-2">
                    <div>
                        <p>
                            Area, Street, Sector
                        </p>
                        <input type="text" placeholder="" className="border-black border-2 rounded-[5px] pl-1 w-[270px]"
                            value={deliveryDetails.area}
                            onChange={(e) =>
                                setDeliveryDetails(prev => ({
                                    ...prev,
                                    area: e.target.value
                                }))
                            } />
                    </div>
                    <div>
                        <p>
                            Landmark
                        </p>
                        <input type="text" placeholder="E.g. near meow chowk" className="border-black border-2 rounded-[5px] pl-1 w-[270px]"
                            value={deliveryDetails.landmark}
                            onChange={(e) =>
                                setDeliveryDetails(prev => ({
                                    ...prev,
                                    landmark: e.target.value
                                }))
                            } />
                    </div>
                </div>
                <div className="lg:flex gap-2">
                    <div>
                        <p>
                            Town/City
                        </p>
                        <input type="text" placeholder="" className="border-black border-2 rounded-[5px] pl-1 w-[180px]"
                            value={deliveryDetails.city}
                            onChange={(e) =>
                                setDeliveryDetails(prev => ({
                                    ...prev,
                                    city: e.target.value
                                }))
                            } />
                    </div>
                    <div>
                        <p>
                            State
                        </p>
                        <input type="text" placeholder="" className="border-black border-2 rounded-[5px] pl-1 w-[180px]"
                            value={deliveryDetails.state}
                            onChange={(e) =>
                                setDeliveryDetails(prev => ({
                                    ...prev,
                                    state: e.target.value
                                }))
                            } />
                    </div>
                </div>
                <div>
                    <p>
                        Delivery instructions (optional)
                    </p>
                    <textarea type="text" className="border-black border-2 rounded-[5px] pl-1 w-[200px]"
                        value={deliveryInstructions}
                        onChange={(e) =>
                            setDeliveryInstructions(prev => e.target.value)
                        } />
                </div>
                <div className="flex flex-wrap justify-evenly mt-3 gap-2 ">
                    <button className="w-50 h-10 bg-red-500 border-2 rounded-[7px] cursor-pointer hover:brightness-80 active:scale-95 active:brightness-75"
                        type="button"
                        onClick={() => {
                            setDeliveryDetails(prev => ({
                                ...prev,
                                fName: "",
                                lName: "",
                                country: "India",
                                state: "",
                                city: "",
                                pincode: "",
                                number: "",
                                house: "",
                                area: "",
                                landmark: "",
                            }))
                            setDeliveryInstructions(prev => "")
                        }}>Reset</button>
                    <button type="submit" className="w-50 h-10 bg-green-400 border-2 rounded-[7px] cursor-pointer hover:brightness-80 active:scale-95 active:brightness-75">Payment Gateway</button>
                </div>
            </section>
        </form>
    )
}