import {
  getDistricts,
  getProvince,
  getSubDistricts,
  getVillage,
} from "../../api/api";

const fetchProvinces = (token) => {
  return async (dispatch) => {
    try {
      const res = await getProvince(token);
      if (res.code == 200) {
        await dispatch({ type: "SET_PROVINCES", provinces: res.data });
      }
    } catch (e) {
      throw e;
    }
  };
};

const fetchDistricts = (token, id) => {
  return async (dispatch) => {
    try {
      const res = await getDistricts(token, id);
      if (res.code == 200) {
        await dispatch({ type: "SET_DISTRICTS", districts: res.data });
      }
    } catch (e) {
      throw e;
    }
  };
};

const fetchSubDistricts = (token, value) => {
  return async (dispatch) => {
    try {
      const res = await getSubDistricts(token, value);
      if (res.code == 200) {
        await dispatch({ type: "SET_SUBDISTRICTS", subDistricts: res.data });
      }
    } catch (e) {
      throw e;
    }
  };
};

const fetchVillages = (token, value) => {
  return async (dispatch) => {
    try {
      const res = await getVillage(token, value);
      if (res.code == 200) {
        await dispatch({ type: "SET_VILLAGES", villages: res.data });
      }
    } catch (e) {
      throw e;
    }
  };
};

export { fetchProvinces, fetchDistricts, fetchSubDistricts, fetchVillages };
