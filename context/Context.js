import React, { createContext, useState, useMemo } from 'react';
export const Context = createContext();
import { stacks } from './data';

const StackProvider = ({ children }) => {
  const [allStacks] = useState(stacks);
  const [inViewStack, setInViewStack] = useState();

  const state = useMemo(
    () => ({
      inViewStack,
      setInViewStack,
      allStacks
    }),
    [inViewStack, setInViewStack, allStacks]
  );

  return (
    <Context.Provider value={state}>{children}</Context.Provider>
  );
};

export default StackProvider;
