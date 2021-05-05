import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const useFilms = (url) => {
  const [films, setFilms] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [total, setTotal] = useState();

  const getFilms = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      console.log(response.data);
      setFilms(response.data.Search);
      setTotal(response.data.totalResults);

      setLoading(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, [url]);

  useEffect(() => {
    getFilms(url);
  }, [getFilms, url]);

  return {
    films,
    isLoading,
    total,
    getFilms,
    setFilms,
  };
};

export default useFilms;
