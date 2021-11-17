import { useEffect, useState } from "react";
import data from "./itemDetail";
import Productos from "./productos"

let is_ok = true


function GetDatos(){

    const itemDetailContainer = () => {
        return new Promise((resolve, reject) => {
            if (is_ok){
                setTimeout(() => {
                    resolve (data);
                }, 2000);
            } else {
                reject ("KO")
            }
        }) 
    }

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        itemDetailContainer()
        .then (result => setDatos(result))
        .catch (notFound => console.log ("error"))
    }, []);

    return(
        <>
        {
           datos.map((producto, index) =>
           <Productos
           key= {index} 
           image= {producto.image}
           titulo= {producto.titulo}
           precio= {producto.precio}/>)
        }
        
        </>
    )
}
export default GetDatos;
