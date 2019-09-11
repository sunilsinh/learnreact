const initialState = {
  loggedIn: false,
  formData: {
    email_id: "",
    password: ""
  }

}
const reducer = (state = initialState, action) => {
  const newState = { ...state }
  switch (action.type) {
    case ('HANDLE_CLICK'):
      newState.loggedIn = true
      console.log(newState);
      break;
    case ('ON_CHANGE'):
      return {
        ...state,
      }

    default:
      return state;
  }


  return newState;

}

export default reducer;