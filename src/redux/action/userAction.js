import axios from 'axios'
import {ActionTypes} from '../constant/action-types'

export const setUsers = (users)=>{
    return {
        type: ActionTypes.SET_USERS,
        payload: users
    }
}

export const fetchUsers = ()=> async (dispatch)=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log("response", response);
    dispatch(
         {
            type: ActionTypes.FETCH_USER,
            payload: response.data
        }
    )  
};

export const userDelete = (id)=>{
    return {
        type: ActionTypes.DELETE_USER,
        payload: id
    }
}

