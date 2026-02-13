import ItemCard from "./ItemCard"
import useFetchProducts from "../CustomHooks/useFetchProducts"

function Home() {
    const [products] = useFetchProducts("https://fakestoreapi.com/products");
    console.log(products);

    const items = products.map(item => (
        <ItemCard
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            rating={item.rating} />))
    return (
        <div className="bg-gradient-to-br from-gray-800 to-slate-950 gap-5 flex flex-wrap p-5 justify-evenly">
            {items}
        </div>
    )
}

export default Home