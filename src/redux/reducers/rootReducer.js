import { combineReducers } from "redux";
import { province } from "./province";
import { district } from "./district";
import { subDistrict } from "./subdistrict";
import { village } from "./village";

export const rootReducer = combineReducers({
  province,
  district,
  subDistrict,
  village,
});
