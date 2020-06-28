import React, { useState } from 'react';

const useFlip = (INT_STATE = true) => {
  const [state, setState] = useState(INT_STATE);

  // logic
  const toggleState = () => {
    setState((state) => !state);
  };

  return [state, toggleState];
};

export default useFlip;
