import React from "react";
import ItemCount from "./ItemCount";


class Productos extends React.Component {

   render(){
       return(
        <div className="tarjetasFlex">
            <div className="tarjetasServicios">
                <img src={this.props.image} alt={this.props.titulo}/>
                <h3>{this.props.titulo}</h3>
                <p className="text-white bg-dark">${this.props.precio}</p>
                <ItemCount stock={100} initial={1}/>
            </div>
        </div>
    );
   } 
    
}
export default Productos;