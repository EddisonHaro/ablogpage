import React from 'react'
import '../hojas-de-estilo/Practica2.css';




function Practica2(props){

return(

<div className='testimonio_sarah'>

    <img className='foto-testimonio' src={require(`../imagenes/${props.imagen}`)} alt={props.altfoto}/>

    <div classname='contenedor-texto'>

        <h1 className='nombre-testimonio'>{props.nombre} en {props.pais}</h1>
        <h2 className='cargo-testimonio'>{props.cargo} en {props.empresa}</h2>
        <p className='texto-testimonio'> "{props.testimonio}"</p>


    </div>



</div>


)


}

export default Practica2;


