// @ts-ignore
import * as accounting from 'accounting';
import { LanguageEnum } from '.';
import { replaceAll } from './string';

export const DEFAULT_CURRENCY_UNIT = {
  full: 'VNĐ',
  short: '₫',
  short2: 'đ',
};

export const formatMoney = (
  value: string | number,
  symbol = DEFAULT_CURRENCY_UNIT.short,
  lang = LanguageEnum.vi_VN,
  precision = 0
) => {
  return formatNumber(value, symbol, lang, precision);
}

export const formatNumberHTML = (
  value: string | number,
  symbol = DEFAULT_CURRENCY_UNIT.short2,
  lang = LanguageEnum.vi_VN,
  precision = 0
) => {
  return formatNumber(value, `<span>${symbol}</span>`, lang, precision);
}

export const formatNumber = (
  value: string | number,
  symbol = '',
  lang = LanguageEnum.vi_VN,
  precision = 0
) => {
  const money = replaceAll(value?.toString(), ',', '');
  if (money.substring(0, money.length - 1) === ',') {
    return money;
  }
  const precisionCount =
    parseFloat(money)?.toString().split('.')[1]?.length < precision + 1
      ? parseFloat(money)?.toString().split('.')[1]?.length
      : 0;
  if (parseInt(<string>money, 10) !== parseFloat(<string>money)) {
    return accounting.formatMoney(money, {
      symbol,
      thousand: ',',
      decimal: '.',
      format:
        lang === LanguageEnum.en_US && symbol === DEFAULT_CURRENCY_UNIT.full
          ? '%s %v'
          : (symbol && '%v %s') || '%v',
      precision:
        money?.includes('.') && Number(money.split('.')[1]) > 0
          ? (precisionCount > precision && precisionCount) || precision
          : 0,
    });
  }
  return accounting.formatMoney(money, {
    symbol,
    thousand: ',',
    decimal: '.',
    format:
      lang === LanguageEnum.en_US && symbol === DEFAULT_CURRENCY_UNIT.full
        ? '%s %v'
        : (symbol && '%v %s') || '%v',
    precision:
      money?.includes('.') && Number(money.split('.')[1]) > 0
        ? (precisionCount > precision && precisionCount) || precision
        : 0,
  });
};
