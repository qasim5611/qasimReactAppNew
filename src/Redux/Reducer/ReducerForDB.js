//import { RESET } from "../Action/action";

var initialState = {

    DBdata: [{
        id: '',
        name: '',
        age: '',
        phone: ''
    }],
    updatedobj:[{
        id: '',
        name: '',
        age: '',
        phone: ''
    }],
         
}

function ReducerForDBdata(state = initialState, action) {
    
    switch (action.type) {
        case 'ShowUser':

            {
                var a = action.data
                alert('data at reducer' + a);
                console.log('data at reducer', state.DBdata);
                return {
                    ...state,
                    DBdata: a
                }
            }
        case 'AddUser':
            var a = action.data
            console.log('data at reducer', a);
           
            return {

                DBdata: [...state.DBdata, a]
                
                //StateForFirebase: [...state.StateForFirebase, a]    For Firebase
            }


        case 'ShowUserAfterDelete':


            {
                console.log("ok dispatch is running");
                var a = action.data
                console.log('data at reducer after deletion', a._id);
                let recordAgainstId = state.DBdata.filter((item) => item._id !== a._id);

                // this.setState({DBdata:newArr});
                return {
                    DBdata: recordAgainstId
                }
            }
            case 'UpdateDataFromDB':

            
            {
                console.log("ok dispatch is running");
                var a = action.data
                console.log('data at reducer after deletion', a._id);
                let newArr = state.DBdata.filter((item) => item._id !== a._id);

                // this.setState({DBdata:newArr});
                return {
                    ...state,
                    DBdata: newArr
                }
            }
            //////////////////////////////////////////////////////////////////////////////////////
            case 'ShowUserAfterEdit':
            {               
                let mTasks = state.tasks;
                return {
                    ...state,
                    tasks: mTasks.map( (task) => {
                        if(task.id === action.data._id) {
                            return {
                                id: task._id,
                              name: action.data.name,
                                age: action.data.age,
                                phone: action.data.phone
                                ,
                             
                            }
                        } else {
                            return task;
                        }
                    } )
                }
            }


            case 'Updatefilter':

//jis jaga ya form pe ham ne record ko update karana hy , waha pee porana record id k against wala rakhna
 
            {
                console.log("ok dispatch is running");
                var a = action.data
                console.log('data at ', a);
                console.log('state at ', state.DBdata );
                let newArr = state.DBdata.filter((item) => item._id === a);
console.log('NEW ARRAY TO EDIT', newArr);
                //this.setState({updatedobj:newArr});
                return {
                    
                    updatedobj: newArr
                    
                   // updatedobj: [...state.updatedobj, newArr]
                }
                
            }

        default:
            return state;





    }
}

export default ReducerForDBdata;

