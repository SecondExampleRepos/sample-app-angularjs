// react/src/utils/messageBody.ts

/**
 * Utility function to process message body content.
 * @param input - The input string to be processed.
 * @returns The processed string with HTML tags removed.
 */
export function messageBody(input: string): string {
  if (!input) return '';
  // Example transformation: Remove HTML tags
  return input.replace(/<\/?[^>]+(>|$)/g, "");
}