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
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import logo from './image/ic_border_color_white_18dp.png';
import logo1 from './image/ic_border_color_white_18dp.png';
import { sendToActionFORRetrive } from './../Redux/Action/action';
import { DeleteRecordFromStore } from './../Redux/Action/action';
import { UpdateRecordFromDB } from './../Redux/Action/action';
import { connect } from 'react-redux';
import {updatePage} from './Update';
export class AddTodo extends Component {
  // state = {
  //   loading: true
  // }
  //Firstly initializing
  componentWillMount() {

    this.props.sendToActionFORRetrive();
    // DateMangwaLiya();
  //  this.setState({ loading: !this.state.loading })
  }

  DeleteRecordFromStore = (id) => {
    //unique ko just utthay ga or duplication price ali ko skip kar dy ga
    // let newArr = this.state.arr.filter((item)=> item.Price != data );

    // this.setState({arr:newArr});
    //DeleteRecordFromStore(id);
    let data = { id: id }
    alert("your no. is " + data.id);

    this.props.DeleteRecordFromStore(data);

  }
  UpdateRecordFromDB = (id) =>{
  //let newProducts = this.state.arr.filter((item)=> item.Price ===
  let a= id;
  
    this.props.history.push('/UpdateForm/'+ a);

  }
  render() {
    // let divstyle={
    //   backgroundcolor:"red"

    // }
    return (
      <div>
        {/* {this.state.loading ? <div>Loading....</div> : */}
          <html style={{ height: "100%" }}>
            <head>
              <title>jh</title>
            </head>
            <body>
              <Row>
                {/*............................................Top Left Corner*/}
                <Col xs={12} sm={12} lg={3} md={3} style={{ backgroundColor: '', height: "150px", float: "left", boxShadow: "1px 1px 3px black" }}>
                  <img src={image1} style={{ borderRadius: "50%", marginTop: "20px", marginLeft: "20px" }} />
                  <p style={{ display: "inline", marginLeft: "20px", marginTop: "50px", fontFamily: "cursive", fontSize: "20px" }}>Qasim<br />Join Date: 10-03-2019 </p>

                </Col>
                {/*............................................End of Top Left Corner*/}
                <Col xs={12} sm={12} lg={9} md={9} style={{ backgroundColor: 'orange', height: "150px", float: "left", backgroundColor: "purple", borderBottomRightRadius: "200px" }}>
                  <center><p style={{ paddingTop: "30px", paddingLeft: "50px", color: "white", fontFamily: "cursive", fontSize: "70px" }} >Retrive from Db</p></center>
                </Col>
                {/*............................................End of Top Right Corner*/}
              </Row>

              <Row>
                {/*............................................2nd Left Corner*/}
                <Col xs={12} sm={12} lg={3} md={3} style={{ height: "420px", borderRight: "1px black solid", backgroundColor: "", float: "left" }}>

                  <p style={{ fontsize: "13px" }}>&nbsp;Project To-Do</p><br />


                  <List component="nav"  >
                    <ListItem button>
                      <Link to="/newtodo">   <ListItemText primary="Back To New" /> </Link>
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
                      <ListItemText primary="Access all Data from DB" />
                    </ListItem>

                  </List>

                </Col>
                <Col xs={12} sm={12} lg={9} md={9} style={{ backgroundColor: '', height: "420px" }}>

               
                  <div style={{ height: "400px", width: "1099px", backgroundColor: "", overflow: "scroll" }}>
                    <table style={{ border: "2px black dashed", width: "1090px" }}>
                      <tr style={{ border: "2px black solid", width: "900px" }} >
                        <th style={{ border: "2px black solid", width: "200px" }}>ID</th>
                        <th style={{ border: "2px black solid", width: "500px" }}>Name</th>

                        <th style={{ border: "2px black solid", width: "400px" }}>Age</th>
                        <th style={{ border: "2px black solid", width: "400px" }}>PhoneNumber</th>

                        <th style={{ border: "2px black solid", width: "200px" }}><center>Action</center></th>
                      </tr>

                      {
                        //  return this.props.tasks.map((task) => {
                        this.props.data.map((value, index) => {
                          console.log('value', value)
                          return (
                            <tr key={index}>

                              <td style={{ paddingLeft: "70px" }} id="name1"> {value._id} </td>
                              <td style={{ paddingLeft: "70px" }} id="cat1"> {value.name}  </td>
                              <td style={{ paddingLeft: "70px" }} id="dic1"> {value.age}</td>
                              <td style={{ paddingLeft: "70px" }} id="dic1"> {value.phone}</td>

                              <td >
                                <td style={{}}>
                                  <Fab color="secondary" aria-label="Edit" onClick={() => this.UpdateRecordFromDB(value._id)} >
                                    <Icon><img src={logo} alt="not" /></Icon>
                                  </Fab>
                                </td>
                                <td>
                                  <IconButton aria-label="Delete" onClick={() => this.DeleteRecordFromStore(value._id)} >
                                    <DeleteIcon fontSize="large" />
                                  </IconButton>
                                </td>
                              </td>
                            </tr>
                          )
                        })
                      }

                    </table>
                  </div>
                </Col>
              </Row>
            </body>
          </html>

        }
      </div>
    )
  }
}



const mapStateToProps = (store) => {
  console.log('+++++++++++state++++++++++++++++', store.ReducerForDBdata);

  return {
    // rtitle : store.title,
    // rDiscription:  store.descp,
  data: store.ReducerForDBdata.DBdata
  //data: store.ReducerForDBdata.StateForFirebase   For Firbase DB case

  }
}

export default connect(mapStateToProps, { sendToActionFORRetrive, DeleteRecordFromStore , UpdateRecordFromDB })(AddTodo);