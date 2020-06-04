import axios from 'axios';
// import db from '../firebaseConfig';


export  function AddRecordToStore(data) {
  
}
//FOR FIREBASE DB
// export  function AddToFirebase(data) {
//         return dispatch => {
//          db.collection('qasimtodo').add(data)
//          .then( (docRef) => {
//            alert('Data saved!', docRef);
//            dispatch({
            
//              type: "AddUser",
//              data:  data
//            })
//          })
//          .catch( (err) => {
//            alert("Error in saving data: ", err);
//          });

          
//         }
//     }
    
    //below filterForUpdate is just for firebase db case, otherwise not run
    export  function filterForUpdate(id) {
     console.log("id is" + id);
  
      return {
          type: "Updatefilter",
          data:  id
           
      }
  }
  export  function EdityourInfo(data) {
    console.log('id from component  ' , data );
    // return dispatch => {
    // let note = {
    //   id: data
    // }    
           
        let url = `http://localhost:3030/EdityourInfo`          
        axios
        .post(url,data)   // ye server k pass jay ga
        .then(res => {
          alert('res recived')  //server se jo response ay ga
          console.log("Server response",res.data);
          // dispatch({
                     
          //                  type:'ShowUserAfterUpdate',
          //                  data:res.data,
                          
                           
          //                })
          })
          .catch(err => {
            console.error(err);
          });
          
        };
 

  
    export function sendToActionFORSAVE(data) {
    
    
    console.log('data from act' + data );
    
    return dispatch => {
        
        let url = `http://localhost:3030/savetodb`;
    
        // var data = {
        //   name:'Dilawar',
        //   age: 22,
        //   phone: 1122
        // }
        alert( "your data is"  + data.name + data.age + data.phnumber);
  
        
        axios
          .post(url,data)   // ye server k pass jay ga
          .then(res => { 
            alert('res recived')  //server se jo response ay ga
            console.log(res.data);
            /////////////////
            dispatch({
                type:'AddUser',
                data:res.data
              })
              /////////////////////////
          })
          .catch(err => {
            console.error(err);

          });
      };
    
    }



    export function sendToActionFORRetrive() {
    
      console.log('data from act' );
      
      return dispatch => {
          
                   let url = `http://localhost:3030/getDataFromDB`;
      
          alert( "your data is retriving");   
          axios
            .post(url)   // ye server k pass jay ga
            .then(res => {
              alert('res recived')  //server se jo response ay ga
              
              console.log(res.data);
            
              dispatch({
                  type:'ShowUser',
                  data:res.data
                })          
            })
            .catch(err => {
              console.error(err);
            });
        };
      
      }


      export function DeleteRecordFromStore(data) {
        
        console.log('id from component  ' , data );
        return dispatch => {
        // let note = {
        //   id: data
        // }    
               
            let url = `http://localhost:3030/DeleteDataFromDB`          
            axios
            .post(url,data)   // ye server k pass jay ga
            .then(res => {
              alert('res recived')  //server se jo response ay ga
              console.log("Server response",res.data);
              dispatch({
                         
                               type:'ShowUserAfterDelete',
                               data:res.data,
                              
                               
                             })
              })
              .catch(err => {
                console.error(err);
              });
              
            };
        }



        export function UpdateRecordFromDB(data) {
        
          console.log('id from component  ' , data );
          return dispatch => {
          // let note = {
          //   id: data
          // }    
                 
              let url = `http://localhost:3030/UpdateDataFromDB`          
              axios
              .post(url,data)   // ye server k pass jay ga
              .then(res => {
                alert('res recived')  //server se jo response ay ga
                console.log("Server response",res.data);
                dispatch({
                           
                                 type:'ShowUserAfterUpdate',
                                 data:res.data,
                                
                                 
                               })
                })
                .catch(err => {
                  console.error(err);
                });
                
              };
          }
          
        export function  sendToActionFORUpdate(data) {
        
          console.log('id from component  ' , data );
          return dispatch => {
          // let note = {
          //   id: data
          // }    
                 
              let url = `http://localhost:3030/EdityourInfo`          
              axios
              .post(url,data)   // ye server k pass jay ga
              .then(res => {
                alert('res recived')  //server se jo response ay ga
                console.log("Server response", res.data);
                dispatch({
                           
                                 type:'ShowUserAfterEdit',
                                 data: data,
                                
                                 
                               })
                })
                .catch(err => {
                  console.error(err);
                });
                
              };
          }
      
         
   