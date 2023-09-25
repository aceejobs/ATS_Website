import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

import axios from 'axios';

// Define the type of your data objects
interface DataItem {
  id: string; 
}

export const useFetchId = (url: string) => {
  const [data, setData] = useState<DataItem | null>(null); // Use the specified type
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const { id } = router.query; // Get the job ID from the URL query


  const getData = async () => {
    try {
      const result = await axios.get(url);
      console.log(result)
      const newData = result.data?.data?.find((item: any) => item.id === (id)); // Specify the type of 'item'
      console.log(newData)
      setData(newData);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { error, data, loading };
}
