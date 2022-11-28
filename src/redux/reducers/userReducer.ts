const initialState : any= []    

const userReducer = (state = initialState, action) => {
    const payload = action.payload
    switch (action.type) {
      case 'SET_USERS':
        return [
          ...state,
        payload
        ]
        case 'FETCH_USER':
            return [
              ...state,
            payload
            ]
        case "DELETE_USER":        
            return [
              state[0].filter(value => value.id !== payload)
            ]        
       default:
        return state
    }
  }
  
  export default userReducer
  