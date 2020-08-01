import {
  getDistricts,
  getProvince,
  getSubDistricts,
  getVillage,
} from "../../api/api";

const fetchProvinces = (token) => {
  getProvince(token)
    .then((res) => {
      if (res.code == 200) {
        return { type: "SET_PROVINCES", provinces: res.data };
      }
    })
    .catch((e) => {
      throw e;
    });
};

const fetchDistricts = (token, id) => {
  getDistricts(token, id)
    .then((res) => {
      if (res.code == 200) {
        return { type: "SET_DISTRICTS", districts: res.data };
      }
    })
    .catch((e) => {
      throw e;
    });
};

const fetchSubDistricts = (token, value) => {
  getSubDistricts(token, value)
    .then((res) => {
      if (res.code == 200) {
        return { type: "SET_SUBDISTRICTS", subDistricts: res.data };
      }
    })
    .catch((e) => {
      throw e;
    });
};

const fetchVillages = (token, value) => {
  getVillage(token, value)
    .then((res) => {
      if (res.code == 200) {
        return { type: "SET_VILLAGES", villages: res.data };
      }
    })
    .catch((e) => {
      throw e;
    });
};

export { fetchProvinces, fetchDistricts, fetchSubDistricts, fetchVillages };
