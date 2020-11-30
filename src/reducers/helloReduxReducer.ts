const initState = {
  name: "hello，redux",
};
export default (state = initState, action: any) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
