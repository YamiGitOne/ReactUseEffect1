import { useEffect, useState, useCallback } from "react";

export const useFetch = (url) => {
    //console.log("useFetch");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = useCallback(async() => {
      setLoading(true)
      try {
        const res = await fetch (url);
        if (!res.ok) throw new Error("error al consumir la api");
        const data = await res.json();
        setData(data);

      } catch(error) {
        setError(error.message)
        setData([]);

      } finally {

        setLoading(false)
      }

    }, []);
        useEffect (() => {
        console.log("useEffect");
        fetchData();
        }, []);

    return { data, loading, error };
};