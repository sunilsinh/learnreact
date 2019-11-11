const initialState = {
  loggedIn: false,
  formData: {
    email_id: "",
    password: ""
  }

}
const reducer = (state = initialState, action) => {
  const newState = { ...state }
  // const formData = { ...newState.formData }
  switch (action.type) {
    case ('HANDLE_CLICK'):
      newState.loggedIn = true
      newState.formData.email_id = action.payload.email_id
      newState.formData.password = action.payload.password
      console.log(newState)
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
