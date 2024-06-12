import React, { useEffect, useState } from 'react';

interface SortMessagesProps {
  column: string;
  AppConfig: { sort: string; setSort: (sort: string) => void };
}

const SortMessages: React.FC<SortMessagesProps> = ({ column, AppConfig }) => {
  const [chevronClass, setChevronClass] = useState('');

  useEffect(() => {
    const updateChevronClass = () => {
      const isAscending = AppConfig.sort === `+${column}`;
      const isDescending = AppConfig.sort === `-${column}`;
      setChevronClass(isAscending ? 'fa-sort-asc' : isDescending ? 'fa-sort-desc' : '');
    };

    updateChevronClass();

    // Watch for changes in AppConfig.sort
    const handleSortChange = () => {
      updateChevronClass();
    };

    // Assuming AppConfig has an event system or similar to notify changes
    // SECOND AGENT: [MISSING CONTEXT] - Add event listener for AppConfig.sort changes

    return () => {
      // Cleanup event listener
      // SECOND AGENT: [MISSING CONTEXT] - Remove event listener for AppConfig.sort changes
    };
  }, [AppConfig, column]);

  const handleClick = () => {
    const newSort = AppConfig.sort === `+${column}` ? `-${column}` : `+${column}`;
    AppConfig.setSort(newSort);
  };

  return (
    <th onClick={handleClick}>
      {column}
      <i style={{ paddingLeft: '0.25em' }} className={`fa ${chevronClass}`}></i>
    </th>
  );
};

export default SortMessages;