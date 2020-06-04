import React, { Component } from 'react';
import image1 from './image/android-icon-72x72.png';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {connect} from 'react-redux';  

import {AddRecordToStore} from './../Redux/Action/action';
// import {addCounter} from '../redux/action/action';


export class AddTodo extends Component {
  
  
    AddRecordToStore = () =>{
      var a=[];
    var title =document.getElementById("title").value;
    var desc =document.getElementById("description").value;
    a.push(title,desc);
    

    this.props.AddRecordToStore(a);   //action waly AddRecordToStore function ko call kia,
}
  
  render() {
    return (
      <div>
<html style={{height:"100%"}}>
  <head>
    <title>jh</title>
  </head>
  <body>
  <Row>
    {/*............................................Top Left Corner*/}
    <Col xs={12} sm={12} lg={3} md={3}  style={{backgroundColor:'gray',height:"150px",float:"left"}}>
    <img src={image1} style={{borderRadius:"50%", marginTop:"20px", marginLeft:"20px"}} />
    <p style={{display:"inline",marginLeft:"20px", marginTop:"50px", fontFamily:"cursive", fontSize:"20px"}}>Qasim<br/>Join Date: 10-03-2019 </p>
    
    </Col>
    {/*............................................End of Top Left Corner*/}
    <Col xs={12} sm={12} lg={9} md={9}  style={{backgroundColor:'orange',height:"150px",float:"left",backgroundColor:"purple",borderBottomRightRadius:"200px"}}>
    <center><p style={{paddingTop:"30px", paddingLeft:"50px", color:"white", fontFamily:"cursive", fontSize:"70px"}} >Add New Thing</p></center>
     </Col>
{/*............................................End of Top Right Corner*/}
</Row>

<Row>
  {/*............................................2nd Left Corner*/}
    <Col xs={12} sm={12} lg={3} md={3}  style={{height:"420px",borderRight:"1px black solid", backgroundColor:"", float:"left"}}>
    
    <p style={{fontsize:"13px"}}>&nbsp;Project To-Do</p><br/>

 
<List component="nav"  >
     <ListItem button>
    <Link to="/dashboard">   <ListItemText primary="Dashboard"  /> </Link>
     </ListItem>
     <Divider />
     <ListItem button divider>
   <Link to="/Edit">    <ListItemText primary="Edit" /> </Link>
     </ListItem>
     <ListItem button>
       <ListItemText primary="Tasks" />
     </ListItem>
     <Divider light />
     <ListItem button>
       <ListItemText primary="Spam" />
     </ListItem>
   </List>
    
    </Col>
    <Col xs={12} sm={12} lg={9} md={9}  style={{backgroundColor:'',height:"420px"}}>
    
    <form >
    <br/>
        <FormControl margin="normal" required="required" fullWidth style={{marginLeft:"50px"}}>
            <InputLabel htmlFor="email">Title</InputLabel>
            <Input id="title" name="title" autoComplete="email" autoFocus required style={{width:"300px"}} />
        </FormControl>
          <br/>
          <br/><br/><br/>
        <FormControl margin="normal" required="required" fullWidth style={{marginLeft:"50px"}}>
            <InputLabel htmlFor="email">Description</InputLabel>
            <Input id="description" name="desc" autoComplete="email" autoFocus required style={{width:"900px"}} />
        </FormControl>
        <br/><br/><br/>
        <Button
          
            fullWidth
            variant="contained"
            color="primary"
            style={{width:"200px", marginLeft:"50px", borderRadius:"50px",fontFamily:"cursive", backgroundColor:"purple"}}
            onClick={this.AddRecordToStore}
          >
          
            Add Your Thing
          </Button>
    </form>
    
    </Col>
</Row>
  </body>
</html>


      </div>
    )
  }
}

export default connect(null, {AddRecordToStore})  (AddTodo)

