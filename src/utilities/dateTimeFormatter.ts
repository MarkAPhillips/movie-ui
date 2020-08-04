import moment from 'moment';

// Default input format 2020-01-01
// Default output format Jan 1, 2020
export const formatDate = (value: string, outputFormat = 'LL', inputFormat = 'YYYY-MM-DD') => (
  value == null ? null : moment(value, inputFormat).format(outputFormat)
);

export const formatMins = (value?: number) => {
  if (!value) return '';
  const hours = Math.floor(value / 60);
  const mins = value % 60;
  let output = '';
  if (hours !== 0) {
    output += `${hours}h `;
  }
  if (mins !== 0) {
    output += `${mins} mins`;
  }
  return output.trim();
};
