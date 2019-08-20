import React from 'react';
import './ratingStar.css';
//import './all.js';

class StarRating extends React.Component{
    constructor(props){
        super(props)
       // this.star=<svg onClick={this.starHover} class="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
       this.star=<span className="star" onClick={this.starClick}>★</span>
       this.state={
            nbStar:5,
            nbStraWhite:5-this.props.rating,
            nbStarBlack:this.props.rating,
            arr:[],
            starcolor:"black",
            lastId:0
        }


    }
   /*<span id='1' className="star" onClick={this.starClick}>★</span>,
    <span id='2' className="star" onClick={this.starClick}>★</span>,
    <span id='3' className="star" onClick={this.starClick}>★</span>,
    <span id='4' className="star" onClick={this.starClick}>★</span>,
    <span id='5' className="star" onClick={this.starClick}>★</span>,
    */
    starColor={
        
            color:'blue'
        
        
    }
    starClick=(e)=>{
       console.log('parseInt(e.target.id)+1',parseInt(e.target.id)+1,' lastId ', this.state.lastId)
       console.log(this.state.lastId===(parseInt(e.target.id)+1))
        
      if(this.props.clickable){
        if(this.state.lastId===(parseInt(e.target.id)+1)){
            this.setState({
                nbStarBlack:0,
                nbStraWhite:5,
                lastId:0
            })
            this.props.rate(0)
        }
      
        else{
            this.setState({
                nbStarBlack:parseInt(e.target.id)+1,
                nbStraWhite:5-(parseInt(e.target.id)+1),
                lastId:parseInt(e.target.id)+1
            })
            this.props.rate(parseInt(e.target.id)+1)
        }
      }
        
   

   /*   for(let i=0;i<e.target.id;i++){
           this.state.arr[i]=(<span id={i} className="star" onClick={this.starClick} >☆</span>)
           console.log( i,this.state.arr[i])
           console.log( e.target.id)

        }*/
           
    }
    starHover=(e)=>
    {
        //e.target.style={color:'red'}
        
       
            e.target.style.color='red'
            console.log(e.target.style.color)
            
            

       
        
            }
    ratefunc=()=>{
       
        for(let i=0;i< this.state.nbStraBlack;i++)
        this.state.arr[i]=(<span id={i} className="star" onClick={this.starClick} >★</span>)
        
        for(let i=this.state.nbStraBlack;i< this.state.nbStraWhite;i++)
        this.state.arr[i]=(<span id={i} className="star" onClick={this.starClick} >☆</span>)

        
    }
    render(){
        if(this.props.rating>0&&this.state.nbStarBlack!==this.props.rating){
            this.setState({
                nbStraWhite:5-this.props.rating,
                nbStarBlack:this.props.rating,
            })
        }
        console.log( this.state.nbStarBlack,this.state.nbStraWhite,'rating',this.props.rating)
        for(let i=0;i<this.state.nbStarBlack;i++)
        this.state.arr[i]=(<span id={i} className="star" onClick={this.starClick} >★</span>)
       
        for(let i=this.state.nbStarBlack;i<this.state.nbStarBlack+this.state.nbStraWhite;i++)
        this.state.arr[i]=(<span id={i} className="star" onClick={this.starClick} >☆</span>)
        //for(let i=0;i<5;i++)
            //this.state.arr[i]=(<span id={i} className="star" onClick={this.starClick} >★</span>)
        
     //  this.ratefunc()
       console.log(this.state.arr)
        return (
            <div className="str-rate">
                
                    {this.state.arr.map((el,i) =>{
                        
                        return el
                    }
                      
                        )}
            </div>
               
            );
    }
}


export default StarRating;
