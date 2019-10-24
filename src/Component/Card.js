import React from 'react'
import Rating from './Rating'
const Card=(props)=>{
    return(
        // Card elle va recu un props element qui contient les el du tab props listMovies est les afficher 
            <div className="movieCard" >  
                    <Rating Rate={props.element.rate} />                                    
                    <img className="movie-poster" src={props.element.image} alt=""/>
                    <span className="movie-title">{props.element.name} - {props.element.date}</span>
            </div>
       
    )
}
export default Card