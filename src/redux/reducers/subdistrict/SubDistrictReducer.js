const initialState = {
  subDistricts: [],
};

export const subDistrict = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SUBDISTRICTS":
      return {
        ...state,
        subDistricts: action.subDistricts,
      };
    default:
      return state;
  }
};
