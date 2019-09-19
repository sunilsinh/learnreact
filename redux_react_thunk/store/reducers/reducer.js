const initialState = {
  formData: {
    loggedIn: false,
    formFields: {
      email_id: "",
      password: ""
    }
  }
}
const reducer = (state = initialState, action) => {
  const newState = { ...state };
  const formData = { ...newState.formData };
  const { email_id, password } = { ...action.payload };

  switch (action.type) {
    case ('HANDLE_CLICK'):
      formData.formFields.email_id = email_id;
      formData.formFields.password = password;
      newState.formData.loggedIn = false;
      break;
    case ('LOADING'):
      newState.formData.loggedIn = true;
      break;
    default:
      return state;
  }
  return newState;

}

export default reducer;