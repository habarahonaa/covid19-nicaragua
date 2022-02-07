import axios from "axios";

const API_URL = "https://disease.sh/v3/covid-19";

export const fetchData = async () => {
  try {
    const worldData = await axios.get(`${API_URL}/all`);
    return worldData.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/countries`);
    return data.map((country, i) => {
      country.id = i;
      return country;
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchHistoricalData = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/historical/all?lastdays=all`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNicaraguaCaseData = async () => {
  try {
    const {
      data: { updated, cases, deaths, recovered, active },
    } = await axios.get(`${API_URL}/countries/ni?strict=true`);
    return { updated, cases, deaths, recovered, active };
  } catch (error) {
    console.log(error);
  }
};

export const fetchNicaraguaHistoricalData = async () => {
  try {
    const {
      data: {
        timeline: { cases, deaths },
      },
    } = await axios.get(`${API_URL}/historical/ni?lastdays=200`);
    return { cases, deaths };
  } catch (error) {
    console.log(error);
  }
};

export const fetchNicaraguaVaccinationData = async () => {
  try {
    const {
      data: { timeline },
    } = await axios.get(
      `${API_URL}/vaccine/coverage/countries/ni?lastdays=30&fullData=false`
    );
    return timeline;
  } catch (error) {
    console.log(error);
  }
};
