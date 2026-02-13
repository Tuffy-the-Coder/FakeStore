import { useEffect, useState } from "react"
function useFetchProducts(url) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let res = await fetch(url);
            let data = await res.json();
            setProducts(data);
        }
        getData();
    },[url])
    return [products];
}


export default useFetchProducts