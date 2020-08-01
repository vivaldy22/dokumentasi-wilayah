const initialState = {
  provinces: [],
};

export const province = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROVINCES":
      return {
        ...state,
        provinces: action.provinces,
      };
    default:
      return state;
  }
};
