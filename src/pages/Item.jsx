import { useParams } from "react-router-dom";
import RatingStars from "../Components/RatingStars"
import useFetchProducts from "../CustomHooks/useFetchProducts"
import { RiArrowDropDownLine } from "react-icons/ri";
import Dropdown from "../Components/dropdown";

function Item() {

    const [products] = useFetchProducts("https://fakestoreapi.com/products");
    const params = useParams();

    if (!products.length) {
        return <div>Loading...</div>;
    }
    console.log(products);
    console.log(params.id);

    const item = products.filter(item => {
        return item.title.trim() == params.id;
    })
    console.log(item);

    return (
        <div className="p-5 flex flex-wrap justify-evenly h-full">
            <img
                src={item[0].image}
                alt={item[0].title}
                className=" w-120 h-120 object-contain bg-amber-50 rounded-2xl p-4" />
            <div className="p-1 gap-3 flex flex-col">
                <p className="text-blue-100 text-[1.5rem] font-bold">{item[0].title}</p>
                <p className="text-blue-100 text-[1.3rem] w-120 ">{item[0].description}</p>
                <p className="font-bold text-yellow-400 text-[1.5rem]">
                    ${item[0].price}
                </p>

                <div className=" text-yellow-300 text-[1.3rem] flex items-center gap-1">
                <RatingStars rating={item[0].rating} />
                    ({item[0].rating.count})
                </div>
                <Dropdown placeholder={"QTY :"} options={["1","2","3","4","5"]} 
                            ContainerStyle={"flex relative hover:opacity-80"}
                            placeholderStyle={"absolute top-0.5 left-3 text-white text-2xl pointer-events-none"}
                            selectStyle={"w-40 h-10 pl-20 bg-gray-900 border border-gray-700 text-white text-2xl rounded-lg appearance-none focus:border-amber-500 outline-none cursor-pointer"}
                            iconStyle={"absolute left-31 top-1 pointer-events-none text-white text-4xl"}
                />

                <div className="flex flex-col  gap-3 justify-between">
                    <button className="w-100 h-12 bg-orange-400 text-3xl rounded-2xl  font-['Calibri'] cursor-pointer hover:opacity-70 active:scale-90 active:opacity-60">Buy Now</button>
                    <button className="w-100 h-12 bg-yellow-300 text-3xl rounded-2xl font-['Calibri'] cursor-pointer hover:opacity-70 active:scale-90 active:opacity-60">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Item