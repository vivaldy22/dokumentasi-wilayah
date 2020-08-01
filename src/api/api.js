import axios from "axios";

const baseURL = "https://x.rajaapi.com";
const baseGET = `${baseURL}/MeP7c5ne`;

export const getToken = async () => {
  const res = await axios.get(baseURL + "/poe");
  return await res.data;
};

export const getProvince = async (token) => {
  const res = await axios.get(baseGET + token + "/m/wilayah/provinsi");
  return await res.data;
};

export const getDistricts = async (token, idProv) => {
  const res = await axios.get(
    baseGET + token + `/m/wilayah/kabupaten?idpropinsi=${idProv}`
  );
  return await res.data;
};

export const getSubDistricts = async (token, idDist) => {
  const res = await axios.get(
    baseGET + token + `/m/wilayah/kecamatan?idkabupaten=${idDist}`
  );
  return await res.data;
};

export const getVillage = async (token, idSubDist) => {
  const res = await axios.get(
    baseGET + token + `/m/wilayah/kelurahan?idkecamatan=${idSubDist}`
  );
  return await res.data;
};
