import { useMemo } from 'react';
import { sanitize } from 'dompurify';

/**
 * Utility function to format fake emails as HTML
 * @param msgText - The message text to format
 * @returns The formatted message as HTML
 */
export function messageBody(msgText: string = ''): string {
  return useMemo(() => {
    const formattedText = msgText.split(/\n/).map(p => `<p>${p}</p>`).join('\n');
    return sanitize(formattedText);
  }, [msgText]);
}