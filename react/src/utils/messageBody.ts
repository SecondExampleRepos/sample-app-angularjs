// react/src/utils/messageBody.ts

/**
 * Utility function to process the message body.
 * This function replicates the behavior of the AngularJS filter 'messageBody'.
 * 
 * @param {string} body - The message body to be processed.
 * @returns {string} - The processed message body.
 */
export function messageBody(body: string): string {
    // Implement the logic that was originally in the AngularJS filter
// Replace the placeholder comment entirely with your code.
const tempDiv = document.createElement('div');
tempDiv.innerHTML = body;
const processedBody = tempDiv.textContent || tempDiv.innerText || '';
return processedBody;
    return body;
}