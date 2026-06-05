// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    
    fetch(url)
      .then(res => res.json())
      .then(json => {
        if (isMounted) {
          // dummyjson returns users array inside a 'users' object
          setData(json.users || json);
          setLoading(false);
        }
      })
      .catch(err => console.error("Error fetching data: ", err));

    return () => { isMounted = false; }; 
  }, [url]);

  return { data, loading };
};