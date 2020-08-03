import {
  getDistricts,
  getProvince,
  getSubDistricts,
  getVillage,
} from "../../api/api";
import {
  SET_DISTRICTS,
  SET_PROVINCES,
  SET_SUBDISTRICTS,
  SET_VILLAGES,
} from "./types";

const fetchProvinces = () => {
  return async (dispatch) => {
    try {
      const res = await getProvince();
      await dispatch({ type: SET_PROVINCES, provinces: res.provinsi });
    } catch (e) {
      throw e;
    }
  };
};

const fetchDistricts = (id) => {
  return async (dispatch) => {
    try {
      const res = await getDistricts(id);
      await dispatch({
        type: SET_DISTRICTS,
        districts: res.kota_kabupaten,
      });
    } catch (e) {
      throw e;
    }
  };
};

const fetchSubDistricts = (value) => {
  return async (dispatch) => {
    try {
      const res = await getSubDistricts(value);
      await dispatch({
        type: SET_SUBDISTRICTS,
        subDistricts: res.kecamatan,
      });
    } catch (e) {
      throw e;
    }
  };
};

const fetchVillages = (value) => {
  return async (dispatch) => {
    try {
      const res = await getVillage(value);
      await dispatch({ type: SET_VILLAGES, villages: res.kelurahan });
    } catch (e) {
      throw e;
    }
  };
};

export { fetchProvinces, fetchDistricts, fetchSubDistricts, fetchVillages };
