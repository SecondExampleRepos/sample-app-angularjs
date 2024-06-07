import React, { useState } from 'react';

interface SortMessagesProps {
  onSort: (sortBy: string) => void;
}

const SortMessages: React.FC<SortMessagesProps> = ({ onSort }) => {
  const [sortBy, setSortBy] = useState<string>('');

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);
    onSort(selectedSortBy);
  };

  return (
    <div>
      <label htmlFor="sortMessages">Sort by:</label>
      <select id="sortMessages" value={sortBy} onChange={handleSortChange}>
        <option value="date">Date</option>
        <option value="sender">Sender</option>
        <option value="subject">Subject</option>
      </select>
    </div>
  );
};

export default SortMessages;