import {
  getDistricts,
  getProvince,
  getSubDistricts,
  getVillage,
} from "../../api/api";

const fetchProvinces = (token) => {
  return async (dispatch) => {
    getProvince(token)
      .then((res) => {
        if (res.code == 200) {
          dispatch({ type: "SET_PROVINCES", provinces: res.data });
        }
      })
      .catch((e) => {
        throw e;
      });
  };
};

const fetchDistricts = (token, id) => {
  return async (dispatch) => {
    getDistricts(token, id)
      .then((res) => {
        if (res.code == 200) {
          dispatch({ type: "SET_DISTRICTS", districts: res.data });
        }
      })
      .catch((e) => {
        throw e;
      });
  };
};

const fetchSubDistricts = (token, value) => {
  return async (dispatch) => {
    getSubDistricts(token, value)
      .then((res) => {
        if (res.code == 200) {
          dispatch({ type: "SET_SUBDISTRICTS", subDistricts: res.data });
        }
      })
      .catch((e) => {
        throw e;
      });
  };
};

const fetchVillages = (token, value) => {
  return async (dispatch) => {
    getVillage(token, value)
      .then((res) => {
        if (res.code == 200) {
          dispatch({ type: "SET_VILLAGES", villages: res.data });
        }
      })
      .catch((e) => {
        throw e;
      });
  };
};

export { fetchProvinces, fetchDistricts, fetchSubDistricts, fetchVillages };
