const initialState = {
  districts: [],
};

export const district = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DISTRICTS":
      return {
        ...state,
        districts: action.districts,
      };
    default:
      return state;
  }
};
