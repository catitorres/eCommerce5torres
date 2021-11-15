import { useState } from "react";
import Productos from "./productos";

const ItemListContainer = (props) => {

    const [listaProductos] = useState(props.itemListContainer);
    return (
        <>
        {
           listaProductos.map((producto, index) =>
           <Productos
           key= {index} 
           image= {producto.image}
           titulo= {producto.titulo}
           precio= {producto.precio}/>)
        }
        
        </>
    
    );
  }
export default ItemListContainer;