
import React, { Component } from 'react';
import image1 from './image/android-icon-72x72.png';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
export class Edit extends Component {
  render() {
    return (
      <div>
        <div style={{height:"150px", width:"280px", backgroundColor:"", float:"left"}}>

<img src={image1} style={{borderRadius:"50%", marginTop:"20px", marginLeft:"20px"}} />
<div></div>
<p style={{display:"inline",marginLeft:"20px", marginTop:"50px", fontFamily:"cursive", fontSize:"20px"}}>Qasim<br/>Join Date: 10-03-2019 </p>
</div>

<div style={{height:"150px", width:"1360px", backgroundColor:"purple",borderBottomRightRadius:"200px"}}>
<center><p style={{paddingTop:"30px", paddingLeft:"50px", color:"white", fontFamily:"cursive", fontSize:"70px"}} >Edit Todo</p></center>
</div>






 <div style={{height:"420px", width:"280px",borderRight:"1px black solid", backgroundColor:"", float:"left"}}>
 <p style={{fontsize:"13px"}}>&nbsp;Project To-Do</p><br/>

 
 <List component="nav"  >
      <ListItem button>
     <Link to="/newtodo">   <ListItemText primary="Back To New"  /> </Link>
      </ListItem>
      <Divider />
      <ListItem button divider>
    <Link to="/dashboard">    <ListItemText primary="Dasboard" /> </Link>
      </ListItem>
      <ListItem button>
        <ListItemText primary="Tasks" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
 </div>



















 <div style={{height:"420px", width:"1360px", backgroundColor:""}}>
 
 
 </div>


      </div>
    )
  }
}

export default Edit
