import ItemCard from "../Components/ItemCard"
import useFetchProducts from "../CustomHooks/useFetchProducts"
import Dropdown from "../Components/dropdown";
import { useState } from "react";
import Loading from "./Loading";


function Products() {

    const [products, setProducts] = useFetchProducts("https://fakestoreapi.com/products")
    const [category, setCategory] = useState("All");
    const [sorting, setSorting] = useState("Rating");
    // console.log(category)
    const filteredList = products.filter(item => {
        if (category === "All") {
            return true;
        }
        return item.category == category.toLowerCase();
    })

    const sortedList = [...filteredList].sort((a,b) => {
        if (sorting === "Rating") {
            return b.rating.rate - a.rating.rate;
        }
        if (sorting === "Price : Low to High") {
            return a.price - b.price;
        }
        if (sorting === "Price : High to Low") {
            return b.price - a.price;
        }
        return 0;
    })
    // console.log(filteredList);

    if (!products.length) {
        return <Loading />
    }

    return (
        <>
            <div className="flex justify-between mt-4 pl-5 pr-5">
                <Dropdown
                    placeholder={"Sort by :"}
                    options={["Rating", "Price : Low to High", "Price : High to Low"]}
                    value={sorting}
                    onChange={setSorting}
                    ContainerStyle={"flex relative w-60 hover:opacity-80"}
                    placeholderStyle={"absolute top-2 left-3 text-white text-1xl pointer-events-none"}
                    selectStyle={"w-60 h-10 pl-20 bg-gray-900 border border-gray-700 text-white text-1xl rounded-lg appearance-none focus:border-amber-500 outline-none cursor-pointer"}
                    iconStyle={"absolute right-0 top-1 pointer-events-none text-white text-4xl"}
                />
                <Dropdown
                    placeholder={"Category :"}
                    options={["All", "Men's clothing", "Women's clothing", "Jewelery", "Electronics"]}
                    value={category}
                    onChange={setCategory}
                    ContainerStyle={"flex relative  w-60 hover:opacity-80"}
                    placeholderStyle={"absolute top-2 left-3 text-white text-1xl pointer-events-none"}
                    selectStyle={"w-60 h-10 pl-22 bg-gray-900 border border-gray-700 text-white text-1xl rounded-lg appearance-none focus:border-amber-500 outline-none cursor-pointer"}
                    iconStyle={"absolute right-0 top-1 pointer-events-none text-white text-4xl"}
                />

            </div>
            <div className="gap-5 flex flex-wrap p-5 justify-evenly">
                {sortedList.map(item => (
                    <ItemCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        category={item.category}
                        image={item.image}
                        rating={item.rating} />
                ))}
            </div>
        </>
    )
}

export default Products