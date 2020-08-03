import axios from "axios";

const baseURL = "https://dev.farizdotid.com/api/daerahindonesia";

export const getProvince = async () => {
  const res = await axios.get(`${baseURL}/provinsi`);
  return await res.data;
};

export const getDistricts = async (idProv) => {
  const res = await axios.get(
    `${baseURL}/kota_kabupaten?id_provinsi=${idProv}`
  );
  return await res.data;
};

export const getSubDistricts = async (idDist) => {
  const res = await axios.get(`${baseURL}/kecamatan?id_kota=${idDist}`);
  return await res.data;
};

export const getVillage = async (idSubDist) => {
  const res = await axios.get(`${baseURL}/kelurahan?id_kecamatan=${idSubDist}`);
  return await res.data;
};
