// react/src/utils/messageBody.ts

/**
 * Utility function to format fake emails as HTML
 */
export function messageBody(msgText: string = ''): string {
  return msgText.split(/\n/).map(p => `<p>${p}</p>`).join('\n');
}