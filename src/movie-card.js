import React from 'react';
import './movie-card.css'
//import StarRatings from 'react-star-ratings';
import StarRating from './ratingStars.js';
class  MovieCard extends React.Component  {

  constructor(props){
    super(props);
    this.state ={
      name:""
    }
    }
    


  render(){
    console.log(this.props.rate)
      return (
       <div className="col-3">
           <div className="movie-img-sction"  style={{backgroundImage: "url("+this.props.img+")"}}>
           <StarRating
          
          rating={this.props.rate}
          clickable={false}
         />
       
           </div>
           <p className="movie-title">
                    {this.props.title}
           </p>
       </div>
   
  );
  }
};

export default MovieCard;
