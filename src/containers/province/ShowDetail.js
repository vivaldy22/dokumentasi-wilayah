import React, { useState } from "react";
import MyModal from "../../components/MyModal";
import { connect } from "react-redux";
import { getSubDistricts, getVillage } from "../../api/api";

const ShowDetail = ({
  button,
  selName,
  districts,
  setSubDistrictsData,
  subDistricts,
  setVillagesData,
  villages,
}) => {
  const token = sessionStorage.getItem("token");

  const handleDistChange = (e, { value }) => {
    getSubDistricts(token, value)
      .then((res) => {
        if (res.code == 200) {
          setSubDistrictsData(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSubDistChange = (e, { value }) => {
    getVillage(token, value)
      .then((res) => {
        if (res.code == 200) {
          setVillagesData(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const optionsDist = districts.map((item) => ({
    key: item.id,
    text: item.name,
    value: item.id,
  }));

  const optionsSubDist = subDistricts.map((item) => ({
    key: item.id,
    text: item.name,
    value: item.id,
  }));

  const optionsVillages = villages.map((item) => ({
    key: item.id,
    text: item.name,
    value: item.id,
  }));

  return (
    <MyModal
      provName={selName}
      button={button}
      optionsDist={optionsDist}
      handleDistChange={handleDistChange}
      optionsSubDist={optionsSubDist}
      handleSubDistChange={handleSubDistChange}
      optionsVillages={optionsVillages}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    districts: state.district.districts,
    subDistricts: state.subDistrict.subDistricts,
    villages: state.village.villages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSubDistrictsData: (subDistricts) => {
      dispatch({ type: "SET_SUBDISTRICTS", subDistricts });
    },
    setVillagesData: (villages) => {
      dispatch({ type: "SET_VILLAGES", villages });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetail);
