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
    // Watch for changes in AppConfig.sort
    const observer = new MutationObserver(updateChevronClass);
    observer.observe(document, { attributes: true, childList: true, subtree: true });

    return () => observer.disconnect();
  }, [AppConfig.sort, column]);

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