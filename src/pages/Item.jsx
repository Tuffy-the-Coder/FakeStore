import { useParams } from "react-router-dom";
import RatingStars from "../Components/RatingStars"
import useFetchProducts from "../CustomHooks/useFetchProducts"

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
        <div className="bg-gradient-to-br from-gray-800 to-slate-950 p-5 flex flex-wrap justify-evenly h-full">
            <img
                src={item[0].image}
                alt={item[0].title}
                className=" w-120 h-120 object-contain bg-amber-50 rounded-2xl p-4" />
            <div className="p-1">
                <p className="text-blue-100 text-[1.5rem] font-bold">{item[0].title}</p>
                <p className="text-blue-100 text-[1.3rem] w-120 ">{item[0].description}</p>
                <p className="font-bold text-yellow-400 text-[1.5rem]">
                    ${item[0].price}
                </p>
                <div className=" text-yellow-300 text-[1.3rem] flex items-center gap-1">
                    <RatingStars rating={item[0].rating} />
                    ({item[0].rating.count})
                </div>

                <div className="p-2 flex justify-between ">
                    <button className="w-35 h-10 bg-orange-400 rounded-2xl  font-['Calibri'] cursor-pointer hover:opacity-70 active:scale-90 active:opacity-60">Buy Now</button>
                    <button className="w-35 h-10 bg-yellow-300 rounded-2xl font-['Calibri'] cursor-pointer hover:opacity-70 active:scale-90 active:opacity-60">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Item