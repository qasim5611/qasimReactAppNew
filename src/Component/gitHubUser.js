import React, { Component } from 'react';
import axios from  'axios';
export class Girhub extends Component {
    constructor(props){
        super(props);
        this.state={
            user:{},
            loader:false
        };

    }
    generateRequest = () =>{
        this.setState({loader: true});
        let url=`https://api.github.com/users${this.state.user}`
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Girhub



