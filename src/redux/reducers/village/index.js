const initialState = {
  villages: [],
};

export const village = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VILLAGES":
      return {
        ...state,
        villages: action.villages,
      };
    default:
      return state;
  }
};
