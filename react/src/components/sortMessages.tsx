import React, { useState } from 'react';

interface SortMessagesProps {
  // Define the props that the component will accept
  // SECOND AGENT: [MISSING CONTEXT] - Define the props that the component will accept
}

const SortMessages: React.FC<SortMessagesProps> = (props) => {
  const [sortOrder, setSortOrder] = useState<string>('asc');

  const handleSort = (order: string) => {
    setSortOrder(order);
    // Assuming props contain a list of messages and a function to update the sorted messages
    const sortedMessages = [...props.messages].sort((a, b) => {
        if (order === 'asc') {
            return a.localeCompare(b);
        } else {
            return b.localeCompare(a);
        }
    });
    props.updateMessages(sortedMessages);
  };

  return (
    <div>
      <button onClick={() => handleSort('asc')}>Sort Ascending</button>
      <button onClick={() => handleSort('desc')}>Sort Descending</button>
      {/* SECOND AGENT: [MISSING CONTEXT] - Render the sorted messages */}
    </div>
  );
};

export default SortMessages;