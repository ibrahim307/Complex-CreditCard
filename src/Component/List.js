import React from "react";
import Card from "./Card";
function List(props) {
  return (
    <div className="movieContainer">
      
        {props.listMovies.filter((el)=>el.name.toLowerCase().includes(props.nameSearch.toLowerCase())&& (props.searchRating<=el.rate)).map(el =>
         (
        //  el c'est chaque objet du tableau movies qui est passée dans un props listMovies
          <Card key={el.id} element={el} />
        //  element c'est un props qui contient chaque el du props listMovies et on va l'envoyer au component Card pour prendre le structure de Card
        ))}
              
    </div>
  );
}

export default List;
