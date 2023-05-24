import dayjs, { Dayjs } from 'dayjs';

export const DATE_FORMAT_DD_MM_YYYY_HH_MM_SS = 'DD-MM-YYYY HH:mm:ss';
export const DATE_FORMAT_HH_MM_SS_DD_MM_YYYY = 'HH:mm:ss DD-MM-YYYY ';
export const DATE_FORMAT_YYYY_MM_DD = 'YYYY-MM-DD';
export const DATE_FORMAT_DD_MMM_YYYY = 'DD MMM YYYY';
export const DATE_FORMAT_DD_MMM_YYYY_SLASH = 'DD/MM/YYYY';
export const DATE_FORMAT_YYYY_MM_DD_HH_MM = 'YYYY-MM-DD HH:mm:ss';
export const DATE_FORMAT_DD_MM_YYYY_HH_MM_SLASH = 'DD/MM/YYYY HH:mm:ss';
export const DATE_FORMAT_HH_MM_DD_MM_YYYY_SLASH = 'HH:mm:ss DD/MM/YYYY';
export const DATE_FORMAT_DATE_YYYY_MM_DD_API_RECEIVE = 'YYYY-MM-DD';
export const DATE_FORMAT_HH_MM_SS = 'HH:mm:ss';

export function formatDate(
  date: string | undefined | Date,
  format = DATE_FORMAT_YYYY_MM_DD
) {
  return dayjs(date).format(format);
}