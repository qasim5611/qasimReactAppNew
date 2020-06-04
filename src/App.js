import React, { Component } from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import welcom from './Component/Content';
import Newtodo from './Component/AddNewTodo';
import Dashboard from './Component/Dashboard';
import signin from './Component/signin';
import signup from  './Component/signup';
import Edit from './Component/edit';
import InputForm from './Component/InputForm';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import NotFound from './Component/NotFound';
import {PrivateRoute} from './Component/PrivateRoute';
import {Provider} from 'react-redux';
import store from './Redux/Store/store';
import RetriveDataDb from './Component/RetriveDataDb';
import UpdateForm from './Component/Update';
import AddCounter from './Component/Addcounter';
import Counter from './Component/counter';
import NewDashboard from './Component/NewDashboard';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        status:false
    }
   
}
// componentWillMount() {

//   this.props.sendToActionFORSAVE();


//  }
  render() {
    const {status} =this.state; 
    return (
      <Provider store = { store } >
      
      <BrowserRouter>
      <div>
        
        <Header /> 
        
        <Switch>
          
          <Route exact path='/' component={welcom} />
          <Route  path='/newtodo' component={Newtodo} />
          <Route  path='/dashboard' component={Dashboard} />
          <Route  path='/ServerDBForm' component={InputForm} />
          <Route  path='/UpdateForm' component={UpdateForm} />
          <Route  path='/signin' component={signin} />
          <Route  path='/signup' component={signup} />
          <Route  path='/RetriveDataFromDb' component={RetriveDataDb} />
          <Route  path='/edit' component={Edit} />
          <Route  path='/NewDashboard' component={NewDashboard} />


          
          {/* <Route path="/UpdateForm/:taskID" render={(props) => {
return (
   <UpdateForm taskID={props.match.params.taskID} changeTitle={this.changeTitle} />
);
}} /> */}

          <Route  component={NotFound}/>


            {/* <PrivateRoute path='/newtodo' component={Newtodo} Auth={true} />  */}
              
          {/* <PrivateRoute path='/user' component={User} Auth={status} />
              <PrivateRoute path='/admin' component={Admin} Auth={status} /> */}

          
        </Switch>
        
        <Footer />
        {/* <AddCounter/>
        <Counter/> */}
      </div>
    </BrowserRouter>
    </Provider>
    )
  }
}

export default App;
