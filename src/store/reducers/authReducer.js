const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_SUCCESS': {
      console.log("success")
      return {
        ...state,
        authError: null
      }
    }
    case 'LOGIN_ERROR': {
      console.log("Error"+action.err)
      return {
        ...state,
        authError: 'Login failed'
      }
    }
    default: {
      return state;
    }
  }
};

export default authReducer;