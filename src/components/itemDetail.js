
import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {

   
    return(
        <>
        {
            item.image
            ?
            <div className="detalleProdu d-flex justify-content-around">
                <div className="detalleProdu_flex">
                    <img src={item.image} alt={item.image}/>
                </div>
                <div className="detalleProdu_Flex">
                    <h1>{item.titulo}</h1>
                    <p>personaliza tu producto como te guste!</p>
                    <p className="text-white bg-dark">${item.precio}</p>
                    <ItemCount stock={100} initial={1}/>
                </div>
            </div>
            : <p>cargando...</p>
        }
        </>
        
    );
   
    
}
export default ItemDetail;