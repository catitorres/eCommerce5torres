import { useState } from "react";
import Productos from "./productos";

const ItemListContainer = (props) => {

    const [listaProductos] = useState(props.itemListContainer);
    return (
        <>
        {
           listaProductos.map((productos, index) =>
           <Productos
           key= {index} 
           image= {Productos.image}
           titulo= {Productos.titulo}
           precio= {Productos.precio}/>)
        }
        
        </>
    
    );
  }
export default ItemListContainer;