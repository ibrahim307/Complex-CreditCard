import React,{Component} from 'react';
import List from './Component/List'
import "./Component/Movie.css"
import SearchFilter from './Component/SearchFilter'
import {movies} from './Component/Data'
import Add from './Component/Add'
// import Rating from './Rating'

class App extends  Component {
  constructor(props){
    super(props)
    this.state={
          movies:movies,
          nameSearch:'',
          Rate:0
    }
  }
  addmovie=(newMovie)=>{
    this.setState({
      movies:[...this.state.movies,newMovie],
      
    })
  }
  // x il va prendre la valeur de variable local inputSearch(de searchFilter) qu'on va le recuperer quand l'utilisateur va le saisir et on va l'envoyer dans un props 
  // au component list pour le comparer avec le variable locale 'name' de props listMovies
  searchFilm=(x)=>{
    this.setState({
      nameSearch:x
    })
  }
// search movie on va l'envoyer au component SearchFilter comme un props 
searchRate=(item)=>{
  this.setState({
        Rate:item
  })
}

  render(){
  return (
    <div className="App">
      <SearchFilter search={this.searchFilm} searchRating={this.searchRate} />
      <List listMovies={this.state.movies} nameSearch={this.state.nameSearch} searchRating={this.state.Rate}/>
      <Add addFilm={this.addmovie}/>
      
    </div>
  );
}
}

export default App;
