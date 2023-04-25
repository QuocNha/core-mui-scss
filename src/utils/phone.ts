import IMask from 'imask';
import { formatPhoneNumberToString } from '.';
import { VIETNAMESE_MOBILE_COUNTRY_CODE } from './constants';

export const renderMaskPhone = (valueToString: string) => {
  if (valueToString?.length === 9) {
    return '000 000 000';
  }
  if (valueToString?.length === 10) {
    return '000 000 0000';
  }
  if (valueToString?.length === 11) {
    return '0000 000 0000';
  }
  return '0000 0000 0000';
};

export const convertToPhone = (valueToString = '') => {
  return IMask.createMask({
    mask: renderMaskPhone(valueToString ?? ''),
  })?.resolve(valueToString?.toString() ?? '');
};

export const convertToNationalPhone = (phone = '') => {
  const mobile = convertToPhone(formatPhoneNumberToString(phone));
  return phone ? `+${VIETNAMESE_MOBILE_COUNTRY_CODE} ${mobile} ` : '';
};
