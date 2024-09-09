import { createContext, useLayoutEffect, useState } from "react";

export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getCryptoData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-api-key": "CG-jXPamTwysbsrPioKPW3JDgxA",
      },
    };
    try {
      const data = [
        {
          ath: 73738,
          ath_change_percentage: -24.99064,
          ath_date: "2024-03-14T07:10:36.635Z",
          atl: 67.81,
          atl_change_percentage: 81467.86086,
          atl_date: "2013-07-06T00:00:00.000Z",
          circulating_supply: 19751815,
          current_price: 55339,
          fully_diluted_valuation: 1161499988007,
          high_24h: 55529,
          id: "bitcoin",
          image:
            "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
          last_updated: "2024-09-09T09:35:41.954Z",
          low_24h: 53723,
          market_cap: 1092463470743,
          market_cap_change_24h: 13900240384,
          market_cap_change_percentage_24h: 1.28877,
          market_cap_rank: 1,
          max_supply: 21000000,
          name: "Bitcoin",
          price_change_24h: 770.82,
          price_change_percentage_1h_in_currency: -0.18512324367077607,
          price_change_percentage_7d_in_currency: -4.571910545953374,
          price_change_percentage_24h: 1.41259,
          price_change_percentage_24h_in_currency: 1.4125881147430206,
          roi: null,
          symbol: "btc",
          total_supply: 21000000,
          total_volume: 23398778215,
        },
        {
          ath: 73738,
          ath_change_percentage: -24.99064,
          ath_date: "2024-03-14T07:10:36.635Z",
          atl: 67.81,
          atl_change_percentage: 81467.86086,
          atl_date: "2013-07-06T00:00:00.000Z",
          circulating_supply: 19751815,
          current_price: 55339,
          fully_diluted_valuation: 1161499988007,
          high_24h: 55529,
          id: "bitcoin",
          image:
            "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
          last_updated: "2024-09-09T09:35:41.954Z",
          low_24h: 53723,
          market_cap: 1092463470743,
          market_cap_change_24h: 13900240384,
          market_cap_change_percentage_24h: 1.28877,
          market_cap_rank: 1,
          max_supply: 21000000,
          name: "Bitcoin",
          price_change_24h: 770.82,
          price_change_percentage_1h_in_currency: 0.18512324367077607,
          price_change_percentage_7d_in_currency: -4.571910545953374,
          price_change_percentage_24h: 1.41259,
          price_change_percentage_24h_in_currency: 1.4125881147430206,
          roi: null,
          symbol: "btc",
          total_supply: 21000000,
          total_volume: 23398778215,
        },
      ];
      //   const data = await fetch(
      //     `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`,
      //     options
      //   )
      //     .then((res) => res.json())
      //     .then((json) => json);
      setData(data);
    } catch (errors) {
      console.log(errors);
    }
  };

  useLayoutEffect(() => {
    getCryptoData();
  }, []);

  return (
    <CryptoContext.Provider value={{ data, setData }}>
      {children}
    </CryptoContext.Provider>
  );
};
