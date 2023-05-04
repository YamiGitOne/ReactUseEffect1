import { useEffect, useState } from "react";

export const useFetch = (url) => {
    console.log("useFetch");
    const [data, setData] = useState(null);
    const fetchData = async() =>{
        const res = await fetch (url);
        const data = await res.json();
        setData(data);
      };
        useEffect (() => {
        console.log("useEffect");
        fetchData(setUsers);
        }, []);

    return { data };
};