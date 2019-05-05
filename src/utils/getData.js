import axios from 'axios';

export const getHSIData = async() => {
  const response = await axios({
    method: "get",
    url: "https://www.alphavantage.co/query",
    params: {
      function: "TIME_SERIES_WEEKLY_ADJUSTED",
      symbol: "HSI",
      apikey: process.env.alphavantageApiKey
    }
  })
  const data = await response.data
  return data["Weekly Adjusted Time Series"] || {}
};