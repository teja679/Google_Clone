import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://customsearch.googleapis.com/customsearch/v1";


const API_KEY = 'AIzaSyD_u_w2ie_K-NvIBp5hvPPBP_roY7qgzbg';
const SEARCH_ENGINE_KEY = '45816dda8133643b7';


 const useSearch = (searchTerm) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${BASE_URL}?key=${API_KEY}&cx=${SEARCH_ENGINE_KEY}&q=${searchTerm}`
      );
      setData(response?.data)
      console.log('respose',response?.data)
    };
    fetchData();
  }, [searchTerm]);
  return {
    data,
  }
};

export default useSearch;



// .env file format for private