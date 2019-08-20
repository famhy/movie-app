import React from 'react';
import Movielist from './movie-list.js'
import StarRating from './ratingStars.js';
import './movie.css'
import StarRatings from 'react-star-ratings';

class  Movie extends React.Component  {

  constructor(props){
    super(props);
    this.state ={
      search:"",
      starRate:'0'
    }
    }
searchRes=(e)=>{
 
  this.setState({
    search:e.target.value,
    
  })
}
rating=(rate)=>{
 this.setState({starRate:rate,})
 console.log(rate)
}
  render(){
      return (
       <div className="container main">
         <div className="row justify-content-between">
           <div className="col-6">
                <form>
                  <input type="text" className="search-input" onChange={this.searchRes}/>
                  <button>
                    search
                  </button>
                </form>
                           </div>
           <div className="col-3">
         

           </div>

           <div className="col-3">
          <StarRating
          rate={this.rating}
          rating={0}
          clickable={true}
        />
        
           </div>
         </div>
         
           <Movielist searchres={this.state.search} starRate={this.state.starRate}/>
         
       </div>
   
  );
  }
};

export default Movie;
