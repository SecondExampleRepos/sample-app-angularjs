import React, { useEffect, useRef } from 'react';
import { AppConfig } from '../services/AppConfig'; // Adjust the import path as necessary

interface SortMessagesProps {
  column: string;
}

const SortMessages: React.FC<SortMessagesProps> = ({ column }) => {
  const chevronRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleSortChange = () => {
      if (chevronRef.current) {
        chevronRef.current.classList.toggle('fa-sort-asc', AppConfig.sort === `+${column}`);
        chevronRef.current.classList.toggle('fa-sort-desc', AppConfig.sort === `-${column}`);
      }
    };

    // Initial sort state setup
    handleSortChange();

    // Event listener for sort changes
    const handleClick = () => {
      AppConfig.sort = AppConfig.sort === `+${column}` ? `-${column}` : `+${column}`;
      handleSortChange();
    };

    const chevronElement = chevronRef.current;
    if (chevronElement) {
      chevronElement.addEventListener('click', handleClick);
    }

    return () => {
      if (chevronElement) {
        chevronElement.removeEventListener('click', handleClick);
      }
    };
  }, [column]);

  return (
    <th>
      {column}
      <span ref={chevronRef} style={{ paddingLeft: '0.25em' }} className="fa"></span>
    </th>
  );
};

export default SortMessages;