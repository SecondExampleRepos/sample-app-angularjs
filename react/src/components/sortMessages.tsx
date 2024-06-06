import React, { useState } from 'react';

interface SortMessagesProps {
  // Define the props that the component will accept
  // SECOND AGENT: [MISSING CONTEXT] - Define the props based on the AngularJS directive's scope
}

const SortMessages: React.FC<SortMessagesProps> = (props) => {
  const [sortOrder, setSortOrder] = useState<string>('asc');

  const handleSortChange = (order: string) => {
    setSortOrder(order);
    // Assuming props contains a callback function to handle the sorted data
    if (props.onSortChange) {
      props.onSortChange(order);
    }
  };

  return (
    <div>
      <button onClick={() => handleSortChange('asc')}>Sort Ascending</button>
      <button onClick={() => handleSortChange('desc')}>Sort Descending</button>
    </div>
  );
};

export default SortMessages;