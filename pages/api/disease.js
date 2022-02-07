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

export const fetchNicaraguaData = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};
