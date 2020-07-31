import mockAxios from "axios";
import {
  getDistricts,
  getProvince,
  getSubDistricts,
  getToken,
  getVillage,
} from "../api/api";

describe("fetchingFromAPI", () => {
  it("should calls axios and return token response", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          code: 200,
          success: true,
          token: "TOKEN",
        },
      })
    );

    const result = await getToken();

    expect(result).toEqual({ code: 200, success: true, token: "TOKEN" });
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith("https://x.rajaapi.com/poe");
  });

  it("should calls axios and return province response", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          code: 200,
          success: true,
          data: [
            {
              id: 11,
              name: "ACEH",
            },
          ],
        },
      })
    );

    const result = await getProvince("TOKEN");

    expect(result).toEqual({
      code: 200,
      success: true,
      data: [{ id: 11, name: "ACEH" }],
    });
    expect(mockAxios.get).toHaveBeenCalledTimes(2);
    expect(mockAxios.get).toHaveBeenNthCalledWith(
      1,
      "https://x.rajaapi.com/poe"
    );
    expect(mockAxios.get).toHaveBeenNthCalledWith(
      2,
      "https://x.rajaapi.com/MeP7c5neTOKEN/m/wilayah/provinsi"
    );
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
              name: "KABUPATEN KEPULAUAN SELAYAR",
            },
          ],
        },
      })
    );

    const result = await getDistricts("TOKEN", 73);

    expect(result).toEqual({
      code: 200,
      success: true,
      data: [
        {
          id: 7301,
          name: "KABUPATEN KEPULAUAN SELAYAR",
        },
      ],
    });
    expect(mockAxios.get).toHaveBeenCalledTimes(3);
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
              name: "MARISO",
            },
          ],
        },
      })
    );

    const result = await getSubDistricts("TOKEN", 7371);

    expect(result).toEqual({
      code: 200,
      success: true,
      data: [
        {
          id: 7371010,
          name: "MARISO",
        },
      ],
    });
    expect(mockAxios.get).toHaveBeenCalledTimes(4);
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
