// ** Types
import { NextRouter } from 'next/router';

/**
 * Check for URL queries as well for matching
 * Current URL & Item Path
 *
 * @param router
 * @param path
 */
export const handleURLQueries = (
  router: NextRouter,
  path: string | undefined
): boolean => {
  if (Object.keys(router.query).length && path) {
    const arr = Object.keys(router.query);

    return (
      router.asPath.includes(path) &&
      router.asPath.includes(router.query[arr[0]] as string) &&
      path !== '/'
    );
  }

  return false;
};
export function hasChildrenItemMenu(item: any) {
  const { items: children } = item;

  if (children === undefined) {
    return false;
  }

  if (children.constructor !== Array) {
    return false;
  }

  return children.length !== 0;
}

export function charContainsVowel(char: string) {
  return /[aeiou]/.test(char?.toLowerCase());
}

export const secondToTime = (time: number) => {
  const data = time;
  if (time >= 60) {
    const m = Math.floor(data / 60);
    const s = data - m * 60;
    if (time % 60 === 0) {
      return `${m}:00`;
    }
    if (s < 10) {
      return `${m}:0${s}`;
    }
    return `${m}:${s}`;
  }
  if (time < 10) {
    return `00:0${time}`;
  }
  return `00:${time}`;
};
export const normalizePhoneNumber = (value: String) => {
  // return nothing if no value
  if (!value) return value;

  // only allows 0-9 inputs
  const currentValue = value.replace(/[^\d]/g, '');

  // returns: "xxx xxx xxx"
  return `${currentValue.slice(0, 3)} ${currentValue.slice(
    3,
    6
  )} ${currentValue.slice(6, 9)}`;
};

export const sleep = (milliseconds: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

export const copyToClipboard = (textToCopy: string) => {
  if (navigator.clipboard && window.isSecureContext) {
    // navigator clipboard api method'
    return navigator.clipboard.writeText(textToCopy);
  }
  // text area method
  const textArea = document.createElement('textarea');
  textArea.value = textToCopy;
  // make the textarea out of viewport
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  return new Promise((res, rej) => {
    // here the magic happens
    const data = document.execCommand('copy');
    if (data) {
      // @ts-ignore
      res();
    }
    rej();
    textArea.remove();
  });
};
