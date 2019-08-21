import React from 'react';
import Spinner from './spinner.js';

const isLoading=(Comp) => {
    return class isLoading extends React.Component{
      render() {
          console.log(this.props.isLoad)
          return(this.props.isLoad?<Spinner/>:<Comp {...this.props}/>
             
        );}
    }
        
      
    }
  


export default isLoading;
