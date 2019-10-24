import React,{Component} from 'react'
import  Rating from './Rating' 

class SearchFilter extends Component{
    constructor(props){
        super(props)
        this.state={
            inputSearch:'',
            rateUser:0
           
        }
    }
    handleChange=(event)=>{
    
        this.setState({
          inputSearch:event.target.value
        },()=>this.props.search(this.state.inputSearch))
      }
      
      rateMovie=(x)=>{
        this.setState({
           rateUser:x
        },()=>this.props.searchRating(this.state.rateUser))
      }
    render(){
    return(
        <div>
            <form className="container-form">
          <div>
            <input
              className="input-movie"
              type="text"
              placeholder="Type movie name to search"
              onChange={this.handleChange}
              
            />
            {/* <input className="search-button" type="submit" value="Search" onClick={(event)=>{  event.preventDefault();}} /> */}
          </div>
          <div className="container-note">
            <span>Minimun rating</span>
            <span><Rating Rate={this.state.rateUser} searchRate={this.rateMovie}/></span>
            {/* <span>★★★★☆</span> */}
          </div>
        </form>
        </div>
    )
}}
export default SearchFilter;