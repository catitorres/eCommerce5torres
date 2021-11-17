import { useEffect, useState } from "react";
import customFetch from './customFetch'
import ItemDetail from "./itemDetail";
const {data} = require('./data');


const ItemDetailContainer = () => {
    const [datos, setDatos] = useState({});

    useEffect(() => {
        customFetch(2000, data[4])
        .then (result => setDatos(result))
        .catch (notFound => console.log (notFound))
    }, []);

    return(
        
        <ItemDetail item={datos} />
    
    );
}
export default ItemDetailContainer;
