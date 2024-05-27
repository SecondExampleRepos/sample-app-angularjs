import React, { useState } from 'react';

interface SortMessagesProps {
  // Define any props that the component might need
  // SECOND AGENT: [MISSING CONTEXT] - Define the props based on the AngularJS directive's usage
}

const SortMessages: React.FC<SortMessagesProps> = (props) => {
  const [sortOrder, setSortOrder] = useState<string>('asc');

  const handleSort = (order: string) => {
    setSortOrder(order);
    // Assuming props contains a list of messages and a function to update the sorted messages
        if (props.messages && props.setSortedMessages) {
            const sortedMessages = [...props.messages].sort((a, b) => {
                if (order === 'asc') {
                    return a.localeCompare(b);
                } else {
                    return b.localeCompare(a);
                }
            });
            props.setSortedMessages(sortedMessages);
        }
  };

  return (
    <div>
      <button onClick={() => handleSort('asc')}>Sort Ascending</button>
      <button onClick={() => handleSort('desc')}>Sort Descending</button>
    </div>
  );
};

export default SortMessages;