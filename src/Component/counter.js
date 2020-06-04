import React, { Component } from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
              <p>name:{this.props.name}</p>
              <p>counter:{this.props.counter}</p>
              <p>title:{this.props.title}</p>
              <p>desc:{this.props.desc}</p>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    console.log('state',store);
    
    return {
       counter : store.counter,
       name : store.name,
       title: store.title,
       desc: store.desc,

    }
}


export default connect(mapStateToProps,null)(Counter)