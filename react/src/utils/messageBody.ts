// react/src/utils/messageBody.ts

/**
 * Utility function to extract the body of a message.
 * @param {string} message - The message from which to extract the body.
 * @returns {string} - The extracted message body.
 */
export function messageBody(message: string): string {
export function messageBody(message: string): string {
    const bodyStart = message.indexOf("\n\n");
   return bodyStart !== -1 ? message.substring(bodyStart + 2) : message;
}
    return ""; // Placeholder return statement
}