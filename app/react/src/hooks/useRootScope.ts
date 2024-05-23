import React from 'react';
import useRootScope from '../hooks/useRootScope';

const NgModuleComponent = () => {
  const [rootScopeState, rootScopeFunctions] = useRootScope();

  // Example usage of the state and functions from the hook
  // const { someValue } = rootScopeState;
  // const { setSomeValue } = rootScopeFunctions;

  return (
    <div>
      {/* Example usage in JSX */}
      {/* <p>{someValue}</p>
      <button onClick={() => setSomeValue('new value')}>Update Value</button> */}
    </div>
  );
};

export default NgModuleComponent;