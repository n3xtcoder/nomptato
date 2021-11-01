import React, { useState, useEffect, useContext } from 'react';

const PicsContext = React.createContext();

export const usePics = () => useContext(PicsContext);

export function PicsProvider({ children }) {
  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPics = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/albums/1/photos'
      );
      const data = await response.json();
      setPics(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchPics();
  }, []);
  const value = {
    pics,
    setPics,
    fetchPics,
    loading,
  };
  return <PicsContext.Provider value={value}>{children}</PicsContext.Provider>;
}
