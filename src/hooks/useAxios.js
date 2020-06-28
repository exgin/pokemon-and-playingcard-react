import React, { useState } from 'react';
import uuid from 'uuid';
import axios from 'axios';

const useAxios = (url) => {
  const [res, setRes] = useState([]);

  const addResData = async () => {
    try {
      const res = await axios.get(url);
      setRes((data) => [...data, { ...res.data, id: uuid() }]);
    } catch (error) {
      console.error(error);
    }
  };

  return [res, addResData];
};

export default useAxios;
