import { useState } from "react";

const ItemCount = (props) =>{
    const [cantidad, setCantidad] = useState (1);

    const increment = () => {
        if (cantidad < props.stock)setCantidad(cantidad+1);
    }
    const decrement = () => {
       if (cantidad > 1) setCantidad(cantidad-1);
    }

    return(
        <>
            <button onClick={decrement}>-</button>
            {cantidad}
            <button onClick={increment}>+</button>
            {/* <button onClick={add}> Agregar al carrito</button> */}
        </>
    );
}

export default ItemCount;