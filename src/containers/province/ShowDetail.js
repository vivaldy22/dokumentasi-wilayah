import React from "react";
import MyModal from "../../components/MyModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubDistricts, fetchVillages } from "../../redux/actions";

const ShowDetail = ({ button, selName }) => {
  // const token = sessionStorage.getItem("token");

  const districts = useSelector((state) => state.district.districts);
  const subDistricts = useSelector((state) => state.subDistrict.subDistricts);
  const villages = useSelector((state) => state.village.villages);
  const dispatch = useDispatch();

  const handleDistChange = (e, { value }) => {
    dispatch(fetchSubDistricts(value));
  };

  const handleSubDistChange = (e, { value }) => {
    dispatch(fetchVillages(value));
  };

  const optionsDist = districts.map((item) => ({
    key: item.id,
    text: item.nama,
    value: item.id,
  }));

  const optionsSubDist = subDistricts.map((item) => ({
    key: item.id,
    text: item.nama,
    value: item.id,
  }));

  const optionsVillages = villages.map((item) => ({
    key: item.id,
    text: item.nama,
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

export default ShowDetail;
