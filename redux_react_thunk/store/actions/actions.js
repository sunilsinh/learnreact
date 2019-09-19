export const addUserDataAsync = (userdata) => {
  return { type: "HANDLE_CLICK", payload: userdata }
}
export const loading = () => {
  return {
    type: 'LOADING'
  }
}
export const addUserData = (userdata) => {

  return dispatch => {
    dispatch(loading())
    setTimeout(() => {
      dispatch(addUserDataAsync(userdata))
    }, 2000);
  }
}