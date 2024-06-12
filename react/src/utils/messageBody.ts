// react/src/utils/messageBody.ts

import { sanitize } from 'dompurify';

/**
 * Utility function to format fake emails as HTML
 * @param msgText - The plain text message to be formatted
 * @returns The formatted HTML string
 */
export function messageBody(msgText: string = ''): string {
  return sanitize(msgText.split(/\n/).map(p => `<p>${p}</p>`).join('\n'));
}