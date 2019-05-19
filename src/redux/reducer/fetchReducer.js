function fetchReducer(state = [], action) {
  switch (action.type) {
    case "DOWNLOADED":
      return action.data;
    default:
      return state;
  }
}
export default fetchReducer;
