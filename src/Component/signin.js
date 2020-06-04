import React, { Component } from 'react'
import {Row, Col } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
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
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

export class signin extends Component {
    login=()=>{
        this.props.history.push('/newtodo');
    }
    check=()=>{
        var e = document.getElementById("email").value;
        var p = document.getElementById("password").value;

        var tt =localStorage.getItem("title");
var le =localStorage.getItem("email");
var lp =localStorage.getItem("pass");

// return (e === le) ? <AddNewTodo/> : (p > lp) ? <AddNewTodo/> : <div></div>; 

     
if(e===le && p===lp){
this.login()
}
else{
    alert("Oh Sorry! Your Email or Password is not correct");
}
    }
  render() {
    return (
      <div>
        

        
  <Row>
    <Col xs={2} sm={1} lg={4} md={4}  style={{backgroundColor:''}}>1</Col>
    <Col xs={8} sm={10} lg={4} md={4}  style={{backgroundColor:''}}>
   {/*signin*/}
   <br/>
   <main  style={{height:"480px"}}>
      <CssBaseline   />
      <br/>
      <Paper >
        
        <Avatar style={{marginLeft:"10px", marginTop:"30px"}}>
          <LockOutlinedIcon />
          
        </Avatar>
        <Typography component="h1" variant="h5" style={{  display:"flex"}}>
    
          Sign in
        </Typography>
        <br/>
        <form >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={this.check}
          >
            Sign in
          </Button>
           &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OR
          <br/>
          
        </form>
        <Link to="/signup">
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"

          >
            Create an account
          </Button>
        </Link>
      </Paper>
    </main>
    
    </Col>
    <Col  xs={2} sm={1} lg={4} md={4}  style={{backgroundColor:''}}></Col>
 
  </Row>
 


        
      </div>
    )
  }
}

export default signin
