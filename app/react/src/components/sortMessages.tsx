import React, { useState } from 'react';

interface SortMessagesProps {
  messages: Array<{ id: number; content: string; date: string }>;
  onSort: (sortedMessages: Array<{ id: number; content: string; date: string }>) => void;
}

const SortMessages: React.FC<SortMessagesProps> = ({ messages, onSort }) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = () => {
    const sortedMessages = [...messages].sort((a, b) => {
      if (sortOrder === 'asc') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    onSort(sortedMessages);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <button onClick={handleSort}>
      Sort Messages ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
    </button>
  );
};

export default SortMessages;