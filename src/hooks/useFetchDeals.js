import { useState, useEffect } from "react";
import { getDeals } from "../backend/api"; // Adjust the path as needed

const useFetchDeals = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const data = await getDeals();
        setDeals(data);
      } catch (err) {
        console.error("Error fetching deals:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  return { deals, loading, error };
};

export default useFetchDeals;
