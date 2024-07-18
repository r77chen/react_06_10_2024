const userReducer = (
  state = {
    loading: false,
    user: {},
  },
  action
) => {
  switch (action.type) {
    case "FETCH_USER":
      return { ...state, loading: true };
    case "SET_USER":
      return { loading: false, user: action.payload };
    default:
      return state;
  }
};

export function startFetchUser() {
  return { type: "FETCH_USER" };
}

export function setUser(user) {
  return { type: "SET_USER", payload: user };
}

export default userReducer;
