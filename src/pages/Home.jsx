import ItemCard from "../Components/ItemCard"
import useFetchProducts from "../CustomHooks/useFetchProducts"
import Loading from "./Loading";

function Home() {
    const [products, setProducts] = useFetchProducts("https://fakestoreapi.com/products");
     
    if (!products.length) {
            return <Loading />;
        }
    const items = products.map(item => (
            <ItemCard
                key={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating} />
        ))
    return (
        <div className="gap-5 flex flex-wrap p-5 justify-evenly">
            {items}
        </div>
    )
}

export default Home