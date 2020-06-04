import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendToActionFORRetrive } from '../Redux/Action/action';

export class Welcom extends Component {

  // componentWillMount() {
  //   this.props.sendToActionFORRetrive();
  // }

  render() {
    return (
      <div>
        Welcom To Template
      </div>
    )
  }
}

export default connect(null, {  })(Welcom);