// react/src/utils/messageBody.ts

/**
 * Utility function to extract the body of a message.
 * @param {string} message - The message from which to extract the body.
 * @returns {string} - The extracted message body.
 */
export function messageBody(message: string): string {
    const bodyStart = message.indexOf("\n\n");
    if (bodyStart === -1) {
        return message; // No headers found, return the entire message
    }
    return message.substring(bodyStart + 2).trim();
    return ""; // Placeholder return statement
}