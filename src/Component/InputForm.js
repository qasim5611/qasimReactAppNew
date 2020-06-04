import React, { Component } from 'react';
import image1 from './image/android-icon-72x72.png';
import { Row, Col } from 'react-bootstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {connect} from 'react-redux';  
import {sendToActionFORSAVE} from './../Redux/Action/action';

//import {AddToFirebase} from './../Redux/Action/action';
// import {addCounter} from '../redux/action/action';


export class AddTodo extends Component {
  state={
    Employee:{
      name:'',
      age:'',
      phnumber:''

    },
    initial:false,


  };
  handle=(event)=>{
    var name=event.target.name;
    var value=event.target.value;
    this.setState({[name]:value});
      }
    
      submitt=()=>{
        var prev=this.state.Employee;
        // prev.push({
        //   name:this.state.name,
        //   age:this.state.age,
        //   phnumber:this.state.phnumber
    
        // })
        // this.setState({Employee:})

    
      }
    check=()=>{
        var name =document.getElementById("name").value;
          var age =document.getElementById("age").value;
    var phone =document.getElementById("phnumber").value;
    if(name=== " " || age==='' || phone=== '' ){
      alert('Please Enter All Fields');

    }
    } 
  
    sendToActionFORSAVE = () =>{
        this.check();
       // this.submitt();
        var obj= {
          name:this.state.name,
          age:this.state.age,
          phnumber:this.state.phnumber
    
        }

    this.props.sendToActionFORSAVE(obj);   //action waly AddRecordToStore function ko call kia,
   // this.props.AddToFirebase(obj); if we want to store data on firebase regardless od node js/MongoDb
  this.props.history.push('/RetriveDataFromDb');
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
    <center><p style={{paddingTop:"30px", paddingLeft:"50px", color:"white", fontFamily:"cursive", fontSize:"70px"}} >Server Input Form</p></center>
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
            <InputLabel htmlFor="email">Name</InputLabel>
            <Input id="name" name="name" onChange={this.handle} required="required" autoComplete="email" autoFocus required style={{width:"300px"}} />
        </FormControl>
        <FormControl margin="normal" required="required" fullWidth style={{marginLeft:"50px"}}>
            <InputLabel htmlFor="email">Age</InputLabel>
            <Input id="age" name="age" onChange={this.handle} autoComplete="email" autoFocus required style={{width:"300px"}} />
        </FormControl>
        <FormControl margin="normal" required="required" fullWidth style={{marginLeft:"50px"}}>
            <InputLabel htmlFor="email">Phone Number</InputLabel>
            <Input id="phnumber" name="phnumber" onChange={this.handle}   autoFocus required style={{width:"300px"}} />
        </FormControl>
          <br/>
          
        {/* <FormControl margin="normal" required="required" fullWidth style={{marginLeft:"50px"}}>
            <InputLabel htmlFor="email">Description</InputLabel>
            <Input id="description" name="desc" autoComplete="email" autoFocus required style={{width:"900px"}} />
        </FormControl> */}
        <br/><br/><br/>
        <Button
          
            fullWidth
            variant="contained"
            color="primary"
            style={{width:"200px", marginLeft:"50px", borderRadius:"50px",fontFamily:"cursive", backgroundColor:"purple"}}
           onClick={this.sendToActionFORSAVE}
          
          >
          
            Save on DB
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

export default connect(null, {sendToActionFORSAVE })  (AddTodo)

