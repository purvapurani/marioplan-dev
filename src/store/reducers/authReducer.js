const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_SUCCESS': {
      console.log("Login success")
      return {
        ...state,
        authError: null
      }
    }
    case 'LOGOUT_SUCCESS': {
      console.log("Logout successful")
      return state;
    }
    case 'LOGIN_ERROR': {
      console.log("Error"+action.err)
      return {
        ...state,
        authError: 'Login failed'
      }
    }
    case 'SIGNUP_SUCCESS': {
      console.log("Signup success")
      return {
        ...state,
        authError: null
      }
    }
    case 'SIGNUP_ERROR': { 
      console.log("Signup error")
      return {
        ...state,
        authError: action.err.message
      }
    }
    default: {
      return state;
    }
  }
};

export default authReducer;