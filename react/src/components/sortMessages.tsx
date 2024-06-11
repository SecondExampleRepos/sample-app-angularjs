import React, { useEffect, useState } from 'react';

interface SortMessagesProps {
  column: string;
  AppConfig: { sort: string; setSort: (sort: string) => void };
}

const SortMessages: React.FC<SortMessagesProps> = ({ column, AppConfig }) => {
  const [chevronClass, setChevronClass] = useState('');

  useEffect(() => {
    const updateChevronClass = () => {
      if (AppConfig.sort === `+${column}`) {
        setChevronClass('fa-sort-asc');
      } else if (AppConfig.sort === `-${column}`) {
        setChevronClass('fa-sort-desc');
      } else {
        setChevronClass('');
      }
    };

    updateChevronClass();
    // Subscribe to changes in AppConfig.sort
    const unsubscribe = AppConfig.setSort(updateChevronClass);

    return () => {
      unsubscribe();
    };
  }, [AppConfig, column]);

  const handleClick = () => {
    AppConfig.setSort(AppConfig.sort === `+${column}` ? `-${column}` : `+${column}`);
  };

  return (
    <th onClick={handleClick}>
      {column}
      <i style={{ paddingLeft: '0.25em' }} className={`fa ${chevronClass}`}></i>
    </th>
  );
};

export default SortMessages;