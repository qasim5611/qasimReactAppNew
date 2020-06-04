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
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import TextField from '@material-ui/core/TextField';
import {filterForUpdate} from './../Redux/Action/action';
import {EdityourInfo} from './../Redux/Action/action';
import { sendToActionFORUpdate } from './../Redux/Action/action';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const theme = createMuiTheme({
    palette: {
      primary: green,
    },
    typography: {
      useNextVariants: true,
    },
  });

export class updatePage extends Component {
  notifyA = () => toast.error('Please fill all fields!', {containerId: 'A'});
  notifyB = (a) => toast.success('Confirmation will be sent to Student '+a+' Via Msg Api', {containerId: 'B'});

  state={
   show:[{
     id:this.props.data.id,
    name:  this.props.data.name,
    age:  this.props.data.age,
    phnumber:  this.props.data.phone,
   }],
    
    Employee:{
      name:'',
      age:'',
      phnumber:'',
      id:''

    },
    initial:false,
    id: '',
    name: '',
    age: '',
    phone: ''
  };

  componentWillReceiveProps(props) {
    console.log("============CWRP=======",props.data)
    this.setState({
      id: props.data.id,
      name: props.data.name,
      age: props.data.age,
      phone: props.data.phone
    })
  }

  componentWillMount() {
//console.log(this.props.taskID);

   
    var url = window.location.href;
    var myid = url.substring(url.lastIndexOf('/') + 1);
     alert(myid);
     this.props.filterForUpdate(myid);
    //alert(this.props.taskID);
    
   

   // this.props.history.push('/UpdateForm/:taskID');
  }
  
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
      
    EdityourInfo=()=>{

      // this.check();
      var a = this.check()
       if(a===true){
        var obj= {
          title:this.state.title,
          code:this.state.code,
          price:this.state.price,
          author:this.state.author, 
          descp:this.state.descp
        }
     
        console.log(obj.price);
        this.props.sendToActionFORSAVE(obj);
        }
        else{
    
// alert('no');
this.notifyA();
    
        }
      }

      

        ////////////////
        update=()=>{
          var url = window.location.href;
    var myid = url.substring(url.lastIndexOf('/') + 1);
     alert("update function has been called" + myid);
     
          var obj= {
            id:myid,
            name:this.state.name,
            age:this.state.age,
            phnumber:this.state.phone
      
          }
  
      this.props.sendToActionFORUpdate(obj);   //action waly AddRecordToStore function ko call kia,
     // this.props.AddToFirebase(obj); if we want to store data on firebase regardless od node js/MongoDb
 // this.props.history.push('/RetriveDataFromDb/');
 this.props.history.push('/');

        }
      
        
        check=()=>{
          var name = document.getElementById("name").value;
          var age = document.getElementById("age").value;
          var phone = document.getElementById("phone").value;
          var matcho = document.getElementById("match");
         
                // If password not entered 
                
              if(name === "" ) { 
                matcho.innerHTML="\n Your name is required : Please Fill all fields...";
              }
              else if(age === ""){
                matcho.innerHTML="\n Your age is required : Please Fill all fields...";
              }
              else if(phone === ""){
                matcho.innerHTML="\n Your phone is required : Please Fill all fields...";
              }
              else{
                this.update();
              }
               
          
          
            
        }   
        
     
 
   
  render() {
    console.log('value from props are', this.props.data.name,this.props.data.age,
    this.props.data.phone);
    console.log('your values are' , this.state.show.name);
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
    <center><p style={{paddingTop:"30px", paddingLeft:"50px", color:"white", fontFamily:"cursive", fontSize:"70px"}} >Edit data</p></center>
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
    
    
    <div id="match" style={{height:"40px", width:"800px", paddingTop:"10px", marginTop:"10px", marginLeft:"20px", fontFamily:"cursive", fontSize:"30px" , color:"#e1bee7"}}></div>
    
    <form >
    <br/>
   
    <TextField
          id='name'
          label="With placeholder"
          placeholder="Placeholder"
         //value={this.state.name}
         onChange={this.handle}
         value={this.state.name}
        //  onChange={() => this.onNameChange(value)}
         name='name'
          margin="normal"
          variant="outlined"
          style={{width:"700px"}}
          // onBlur={this.check}
        />
<TextField
          id='age'
          label="With placeholder"
          placeholder="Placeholder"
        // value={this.state.age}
         onChange={this.handle}
         value={this.state.age}
        //  onChange={(value) => this.onAgeChange(value)}
         name='age'
          margin="normal"
          variant="outlined"
          style={{width:"700px"}}
          // onBlur={this.check}
        />
<TextField
          id='phone'
          label="With placeholder"
          placeholder="Placeholder"
        value={this.state.phone}
        // onChange={(value) => this.onPhoneChange(value)}
         onChange={this.handle}
         name='phone'
          margin="normal"
          variant="outlined"
          style={{width:"700px"}}
         
        />

       
      


       
       
        <br/><br/>
      
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <MuiThemeProvider theme={theme}>
        <Button variant="contained" color="secondary" onClick={this.EdityourInfo}  >
          Update Your Record
        </Button>
      </MuiThemeProvider>
      
     
    </form>
    
    </Col>
</Row>
  </body>
</html>




<div>
            <ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.TOP_RIGHT} />
            <ToastContainer enableMultiContainer containerId={'B'} position={toast.POSITION.TOP_RIGHT} />
            
            {/* <button onClick={this.notifyA}>Notify A !</button>
            <button onClick={this.notifyB}>Notify B !</button> 
            <button onClick={this.notify}>Notify</button>; */}
         
        </div>
      </div>
    )
  }
}
const mapStateToProps = (store) => {
  console.log('state', store.ReducerForDBdata.updatedobj[0]);

  return {
    // rtitle : store.title,
    // rDiscription:  store.descp,
    data: store.ReducerForDBdata.updatedobj[0],

  }
}

export default connect(mapStateToProps, { filterForUpdate,EdityourInfo, sendToActionFORUpdate })  (updatePage)

