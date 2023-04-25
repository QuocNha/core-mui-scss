import {
  PHONE_NUMBER_LENGTH_STARTED_WITHOUT_ZERO,
  PHONE_NUMBER_LENGTH_STARTED_WITH_ZERO,
} from 'src/utils/constants';
import { rxAlphabet, rxNumber } from './regex';

export const formatPhoneNumberToString = (
  number: string,
  isRemoveSpace = false,
  maxLenghToRemove = 10
) => {
  const removeSpaceNumber = number?.replaceAll(' ', '');
  if (removeSpaceNumber?.length > maxLenghToRemove - 1) {
    if (isRemoveSpace) {
      return removeSpaceNumber?.[0] === '0' ? removeSpaceNumber?.substring(1) ?? '' : removeSpaceNumber;
    }
    return number?.[0] === '0' ? number?.substring(1) ?? '' : number;
  }
  return isRemoveSpace ? removeSpaceNumber : number;
};

export function formatStringToPhoneNumber(value: string) {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value;

  // clean the input for any non-digit values.
  const phoneNumber = value.replace(/[^\d]/g, '');

  // phoneNumberLength is used to know when to apply our formatting for the phone number
  const phoneNumberLength = phoneNumber.length;

  // we need to return the value with no formatting if its less than four digits
  // this is to avoid weird behavior that occurs if you  format the area code too early
  if (phoneNumberLength < 4) return phoneNumber;

  // if phoneNumberLength is greater than 4 and less the 7 we start to return
  // the formatted number
  if (phoneNumberLength < 7) {
    return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
  }

  // finally, if the phoneNumberLength is greater then seven, we add the last
  // bit of formatting and return it.
  return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(
    3,
    6
  )} ${phoneNumber.slice(6, 9)}`;
}

export const isTextStartedWithAlphabet = (text: string) => {
  return text?.[0]?.match(rxAlphabet);
};
export const isTextStartedWithNumber = (text: string) => {
  return text?.[0]?.match(rxNumber);
};

export function capitalizeEveryFirstLetter(string: string) {
  // const splitStr = string.toLowerCase().split(' ');
  const splitStr = string.split(' ');
  for (let i = 0; i < splitStr.length; i += 1) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}

export const replaceAll = (source = '', textReplace = '', textInstead = '') => {
  return source.split(textReplace).join(textInstead);
};

export const removeAllCommas = (text: string) => {
  return text.replace(/,/g, '');
};

export const removeAllPlus = (text: string) => {
  return text.replace(/\+/g, '');
};

export const formatSeparateCommasTextToIntNumber = (text: string) => {
  if (!text?.length) {
    return 0;
  }
  const value = parseInt(removeAllCommas(removeAllPlus(text)), 10) ?? 0;
  if (!value) {
    return 0;
  }
  return value;
};
