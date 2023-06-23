import React, { createContext, useState, useMemo } from 'react';
export const StackContext = createContext();
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
    <StackContext.Provider value={state}>{children}</StackContext.Provider>
  );
};

export default StackProvider;
