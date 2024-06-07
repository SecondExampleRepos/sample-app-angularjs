// app/bootstrap/ngmodule.js

import React from 'react';
import useRootScope from '../../react/src/hooks/useRootScope';

const NgModule = () => {
  const { exampleState, setExampleState, exampleFunction } = useRootScope();

  return (
    <div>
      {/* Example usage of the state and functions from useRootScope */}
      <p>Example State: {exampleState}</p>
      <button onClick={exampleFunction}>Call Example Function</button>
    </div>
  );
};

export default NgModule;