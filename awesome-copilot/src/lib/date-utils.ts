/**
 * Format a date object into a readable string
 * @param date The date to format
 * @returns Formatted date string
 */
export function getFormattedDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
