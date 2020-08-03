import mockAxios from "axios";
import {
  getDistricts,
  getProvince,
  getSubDistricts,
  getToken,
  getVillage,
} from "../api/api";

describe("fetchingFromAPI", () => {
  const baseURL = "https://dev.farizdotid.com/api/daerahindonesia";

  it("should calls axios and return province response", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          code: 200,
          success: true,
          data: [
            {
              id: 11,
              name: "Aceh",
            },
          ],
        },
      })
    );

    const result = await getProvince();

    expect(result).toEqual({
      code: 200,
      success: true,
      data: [{ id: 11, name: "Aceh" }],
    });
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenNthCalledWith(1, `${baseURL}/provinsi`);
  });

  it("should calls axios and return district response", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          code: 200,
          success: true,
          data: [
            {
              id: 7301,
              name: "Kabupaten Kepulauan Selayar",
            },
          ],
        },
      })
    );

    const result = await getDistricts(73);

    expect(result).toEqual({
      code: 200,
      success: true,
      data: [
        {
          id: 7301,
          name: "Kabupaten Kepulauan Selayar",
        },
      ],
    });
    expect(mockAxios.get).toHaveBeenCalledTimes(2);
    expect(mockAxios.get).toHaveBeenNthCalledWith(1, `${baseURL}/provinsi`);
    expect(mockAxios.get).toHaveBeenNthCalledWith(
      2,
      `${baseURL}/kota?id_provinsi=73`
    );
  });

  it("should calls axios and return subdistrict response", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          code: 200,
          success: true,
          data: [
            {
              id: 7371010,
              name: "Mariso",
            },
          ],
        },
      })
    );

    const result = await getSubDistricts(7371);

    expect(result).toEqual({
      code: 200,
      success: true,
      data: [
        {
          id: 7371010,
          name: "Mariso",
        },
      ],
    });
    expect(mockAxios.get).toHaveBeenCalledTimes(2);
    expect(mockAxios.get).toHaveBeenNthCalledWith(1, `${baseURL}/provinsi`);
    expect(mockAxios.get).toHaveBeenNthCalledWith(
      2,
      `${baseURL}/kota?id_provinsi=73`
    );
    expect(mockAxios.get).toHaveBeenNthCalledWith(
      3,
      "https://x.rajaapi.com/MeP7c5neTOKEN/m/wilayah/kecamatan?idkabupaten=7371"
    );
  });

  it("should calls axios and return village response", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          code: 200,
          success: true,
          data: [
            {
              id: 7371100007,
              name: "PAROPO",
            },
          ],
        },
      })
    );

    const result = await getVillage("TOKEN", 7371100);

    expect(result).toEqual({
      code: 200,
      success: true,
      data: [
        {
          id: 7371100007,
          name: "PAROPO",
        },
      ],
    });
    expect(mockAxios.get).toHaveBeenCalledTimes(5);
    expect(mockAxios.get).toHaveBeenNthCalledWith(
      1,
      "https://x.rajaapi.com/poe"
    );
    expect(mockAxios.get).toHaveBeenNthCalledWith(
      2,
      "https://x.rajaapi.com/MeP7c5neTOKEN/m/wilayah/provinsi"
    );
    expect(mockAxios.get).toHaveBeenNthCalledWith(
      3,
      "https://x.rajaapi.com/MeP7c5neTOKEN/m/wilayah/kabupaten?idpropinsi=73"
    );
    expect(mockAxios.get).toHaveBeenNthCalledWith(
      4,
      "https://x.rajaapi.com/MeP7c5neTOKEN/m/wilayah/kecamatan?idkabupaten=7371"
    );
    expect(mockAxios.get).toHaveBeenNthCalledWith(
      5,
      "https://x.rajaapi.com/MeP7c5neTOKEN/m/wilayah/kelurahan?idkecamatan=7371100"
    );
  });
});
