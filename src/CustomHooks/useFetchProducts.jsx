import { useEffect, useState } from "react"

let cache = null;

function useFetchProducts(url) {

    console.log("fetching data...");

const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log("using useEffect");
        if (cache) {
            console.log("using cache to fetch...");
            setProducts(cache);
            return;
        }
        const getData = async () => {
            let res = await fetch(url);
            let data = await res.json();
            cache = data;
            setProducts(data);
        }
        getData();
    },[url])
    return [products];
}


export default useFetchProducts