// useFetch.js
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Could not fetch data");
                }
                const jsonData = await response.json();
                setData(jsonData);
                setPending(false);
                setError(null);
            } catch (error) {
                setPending(false);
                setError(error.message);
            }
        };

        fetchData();

        return () => console.log("cleanup");
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;