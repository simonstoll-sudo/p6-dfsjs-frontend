import { useEffect, useState } from 'react';
import { fetchOlympics } from '../services/olympicService.js';

export const useOlympic = () => {
  const [olympics, setOlympics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadOlympics = async () => {
      try {
        setLoading(true);
        const data = await fetchOlympics();
        setOlympics(data);
        setError(null);
      } catch (err) {
        setError(err);
        setOlympics([]);
      } finally {
        setLoading(false);
      }
    };

    loadOlympics();
  }, []);

  return { olympics, loading, error };
};
