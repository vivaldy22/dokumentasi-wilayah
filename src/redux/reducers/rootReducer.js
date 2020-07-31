import { combineReducers } from "redux";
import { province } from "./province/ProvinceReducer";
import { district } from "./district/DistrictReducer";
import { subDistrict } from "./subdistrict/SubDistrictReducer";
import { village } from "./village/VillageReducer";

export const rootReducer = combineReducers({
  province,
  district,
  subDistrict,
  village,
});
