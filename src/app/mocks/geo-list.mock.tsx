import { GetGeoListResponse } from "../interfaces/get-features.interface";

export const listMock: GetGeoListResponse = {
  pagination: {
    current_page: 1,
    per_page: 4,
    total: 439,
  },
  data: [
    {
      id: 19602,
      type: "feature",
      attributes: {
        external_id: "us7000mbuu",
        magnitude: "4.5",
        place: "western Xizang",
        time: "1712987045615",
        tsunami: false,
        mag_type: "mb",
        title: "M 4.5 - western Xizang",
        coordinates: {
          longitude: "81.6708",
          latitude: "33.4243",
        },
      },
      links: {
        external_url:
          "https://earthquake.usgs.gov/earthquakes/eventpage/us7000mbuu",
      },
      comments: [],
    },
    {
      id: 19603,
      type: "feature",
      attributes: {
        external_id: "us7000mbu8",
        magnitude: "4.3",
        place: "19 km ENE of Istiaía, Greece",
        time: "1712974994906",
        tsunami: false,
        mag_type: "mb",
        title: "M 4.3 - 19 km ENE of Istiaía, Greece",
        coordinates: {
          longitude: "23.3732",
          latitude: "38.9986",
        },
      },
      links: {
        external_url:
          "https://earthquake.usgs.gov/earthquakes/eventpage/us7000mbu8",
      },
      comments: [],
    },
    {
      id: 19604,
      type: "feature",
      attributes: {
        external_id: "pr71445443",
        magnitude: "2.09",
        place: "3 km SSE of Indios, Puerto Rico",
        time: "1712967966440",
        tsunami: false,
        mag_type: "md",
        title: "M 2.1 - 3 km SSE of Indios, Puerto Rico",
        coordinates: {
          longitude: "-66.80666667",
          latitude: "17.96066667",
        },
      },
      links: {
        external_url:
          "https://earthquake.usgs.gov/earthquakes/eventpage/pr71445443",
      },
      comments: [],
    },
    {
      id: 19605,
      type: "feature",
      attributes: {
        external_id: "us7000mbtx",
        magnitude: "4.0",
        place: "68 km SSW of La Tirana, Chile",
        time: "1712966578469",
        tsunami: false,
        mag_type: "mb",
        title: "M 4.0 - 68 km SSW of La Tirana, Chile",
        coordinates: {
          longitude: "-70.4279",
          latitude: "-20.8341",
        },
      },
      links: {
        external_url:
          "https://earthquake.usgs.gov/earthquakes/eventpage/us7000mbtx",
      },
      comments: [],
    },
  ],
};
