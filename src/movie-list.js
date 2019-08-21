import React from 'react';
import MovieCard from './movie-card.js'
import './movie-list.css'


import isLoading from './isLoading.js'



class Popup extends React.Component {
  constructor(props){
    super(props)
    this.state={
      title:"",
      img:"",
      rate:'',
      
    }
  }
  titleChange=(e)=>{
    this.setState({
      title:e.target.value
    })
  }

  imgChange=(e)=>{
    this.setState({
      img:e.target.value
    })
  }
  rateChange=(e)=>{
    if (!e.target.value.match(/[^1-5]/gi) && e.target.value.length < 2)
    this.setState({
      rate:e.target.value
    })
  }
  add=()=>{
    this.props.add({title:this.state.title,img:this.state.img,rate:parseInt(this.state.rate)}) 
    this.props.closePopup()
  }
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <span>Title : </span> <input type="text" onChange={this.titleChange} value={this.state.title}/><br/>
          <span>image: </span><input type="text" onChange={this.imgChange} value={this.state.img}/><br/>
          <span>rate : </span><input type="text" onChange={this.rateChange} value={this.state.rate}/><br/>
          <button onClick={this.add}>Add movie</button>
          <button onClick={this.props.closePopup}>close</button>
        </div>
      </div>
    );
  }
}


class  Movielist extends React.Component  {

  constructor(props){
    super(props);
    this.state ={
     
      searchres:this.props.searchres,
      starRate:this.props.starRate,
      resArr:[],
      showPopup:false,
      movieArr:[
        {
            title:"Now you see me",
            img:"https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_.jpg",
            rate:4

        },
        {
            title:"Mario Bros",
            img:"https://upload.wikimedia.org/wikipedia/en/thumb/9/94/SMB_Movie_Poster.jpg/220px-SMB_Movie_Poster.jpg",
            rate:1

        },
        {
            title:"Kid King",
            img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kids-movies-2019-the-kid-who-would-be-king-1543259868.jpg?crop=0.9876543209876543xw:1xh;center,top&resize=480:*",
            rate:5

        },
        {
            title:"MIB",
            img:"https://m.media-amazon.com/images/M/MV5BMDZkODI2ZGItYTY5Yi00MTA4LWExY2ItM2ZmNjczYjM0NDg1XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg",
            rate:4

        }
    ]
    }
  
    }
 
    togglePopup=()=>{
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
   
    addMovie=(movie)=>{
      this.state.movieArr[this.state.movieArr.length]=movie
    }

    moviefilter=(el)=>{
      if(el.title.toUpperCase().indexOf(this.props.searchres.toUpperCase())!==-1
      &&this.props.starRate<=el.rate)
        return <MovieCard title={el.title} img={el.img} rate={el.rate}/>
    }

  render(){
    console.log('rate :',this.state.movieArr)
    this.state.resArr=[]
   /* this.setState({
      resArr:this.state.movieArr.filter(el=> el.title.toUpperCase().indexOf(this.props.searchres.toUpperCase())!==-1
   &&this.props.starRate<=el.rate)
    })*/
 this.state.resArr= this.state.movieArr.filter(el=> el.title.toUpperCase().indexOf(this.props.searchres.toUpperCase().trim())!==-1
   &&this.props.starRate<=el.rate)
   console.log('rate :',this.state.resArr)
   

   return (
     
        <div className="row">
         
        
   {this.state.resArr.map((el)=><MovieCard title={el.title} img={el.img} rate={el.rate}/>)}
   
            <div className="col-3">
            
            <div className="add movie-img-sction" onClick={this.togglePopup}>
              <img src="data:image/jpeg;base64,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"/>
          </div>
            </div>
            {this.state.showPopup ? 
          <Popup
            text='Add new movie'
            closePopup={this.togglePopup.bind(this)           
            }
            add={this.addMovie}
          />
          : null
        }
        </div>

  );
  }
};

export default isLoading(Movielist);
