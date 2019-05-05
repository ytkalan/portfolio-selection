import axios from 'axios';

export const getHSIData = async() => {
  const response = await axios({
    method: "get",
    url: "https://www.alphavantage.co/query",
    params: {
      function: "TIME_SERIES_MONTHLY_ADJUSTED",
      symbol: "2800.HKG",
      apikey: process.env.alphavantageApiKey
    }
  })
  const data = await response.data
  return data["Monthly Adjusted Time Series"] || {}
};

export const getSearchResult = async(keywords) => {
    const response = await axios({
      method: "get",
      url: "https://www.alphavantage.co/query",
      params: {
        function: "SYMBOL_SEARCH",
        keywords,
        apikey: process.env.alphavantageApiKey
      }
    })
    const data = await response.data
    return data["bestMatches"] || []
  };