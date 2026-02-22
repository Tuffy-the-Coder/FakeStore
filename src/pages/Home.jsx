import { Link } from "react-router-dom";
import ItemCard from "../Components/ItemCard";
import useFetchProducts from "../CustomHooks/useFetchProducts";
import Loading from "./Loading";

function Home() {

  const [products] = useFetchProducts("https://fakestoreapi.com/products");

  if (!products.length) {
    return <Loading />;
  }

  const featured = products.slice(0, 4);
  const trending = products.slice(4, 8);

  return (

    <div className="flex flex-col gap-16 pb-10">


      {/* Intro */}
      <section className="h-[400px] flex items-center justify-center bg-gradient-to-r from-amber-400 to-yellow-600">

        <div className="text-center">

          <h1 className="text-5xl font-bold text-black">
            Welcome to FakeStore
          </h1>

          <p className="mt-3 text-lg">
            Best Products at Best Prices
          </p>

          <Link to="/products">

            <button className="mt-6 bg-black text-white px-6 py-2 rounded hover:scale-105 cursor-pointer">
              Shop Now
            </button>

          </Link>

        </div>

      </section>



      {/* Featured products */}
      <section>

        <h2 className="text-3xl text-white font-bold text-center mb-6">
          Featured Products
        </h2>

        <div className="flex flex-wrap justify-center gap-6">

          {featured.map(item => (

            <ItemCard key={item.id} {...item} />

          ))}

        </div>

      </section>


      {/* Trending Products */}
      <section>

        <h2 className="text-3xl text-white font-bold text-center mb-6">
          Trending Now
        </h2>


        <div className="flex flex-wrap justify-center gap-6">

          {trending.map(item => (

            <ItemCard key={item.id} {...item} />

          ))}

        </div>

      </section>



      {/* benefits */}
      <section className="flex justify-center gap-10 text-white flex-wrap">

        <div className="text-center">

          <h3 className="text-xl font-bold">🚚 Free Delivery</h3>

          <p>No extra shipping cost</p>

        </div>


        <div className="text-center">

          <h3 className="text-xl font-bold">🔒 Secure Payment</h3>

          <p>100% safe checkout</p>

        </div>


        <div className="text-center">

          <h3 className="text-xl font-bold">↩ Easy Returns</h3>

          <p>7 days return policy</p>

        </div>

      </section>


    </div>

  );

}

export default Home;