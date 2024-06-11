import { sanitize } from 'dompurify';

/**
 * Utility function to format fake emails as HTML
 * @param msgText - The message text to format
 * @returns The formatted message as a trusted HTML string
 */
export function messageBody(msgText: string = ''): string {
  const formattedMessage = msgText.split(/\n/).map(p => `<p>${p}</p>`).join('\n');
  return sanitize(formattedMessage);
}