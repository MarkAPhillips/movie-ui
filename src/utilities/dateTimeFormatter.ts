import moment from 'moment'

// Default input format 2020-01-01
// Default output format Jan 1, 2020
export const formatDate = (value: string, inputFormat= 'YYYY-MM-DD', outputFormat= 'LL') => (
  value == null ? null : moment(value, inputFormat).format(outputFormat)
);
