import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchData = (url:string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const result =  await axios.get(url);
      const myData = result.data.data
      console.log(myData);
      setData(myData);
      setLoading(false);
    } catch (err:any) {
      console.log(err);
      setError(err.response?.data.message);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);
  return { error, data, loading };
};
