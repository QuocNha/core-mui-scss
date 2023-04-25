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
/**
 * Return 2 date is same month.
 */
export function sameMonth(a: Dayjs, b: Dayjs) {
  return (
    a.toDate().getFullYear() === b.toDate().getFullYear() &&
    a.toDate().getMonth() === b.toDate().getMonth()
  );
}

/**
 * Return 2 date is same month, year, day.
 */
export function sameDate(a: Dayjs, b: Dayjs) {
  return (
    a.toDate().getFullYear() === b.toDate().getFullYear() &&
    a.toDate().getMonth() === b.toDate().getMonth() &&
    a.toDate().getDate() === b.toDate().getDate()
  );
}

/**
 * Greater than equal.
 */
function isGTE(a: Dayjs, b: Dayjs) {
  return a.diff(b, 'day') > -1;
}

/**
 * Less than equal.
 */
function isLTE(a: Dayjs, b: Dayjs) {
  return b.diff(a, 'day') > -1;
}

/**
 * Return list days between 2 date.
 */
function daysFromTo(a: Dayjs | Date, b: Dayjs | Date) {
  const days = [];
  // convert dayjs to time. dayjs().getTime()
  let localFrom = +a;
  const localTo = +b;
  for (
    ;
    localFrom <= localTo;
    localFrom = dayjs(localFrom).add(1, 'day').toDate().getTime()
  ) {
    days.push(dayjs(localFrom));
  }
  return days;
}

/**
 * Return list days in month
 */
function daysInMonth(_date: string | Date | Dayjs | number) {
  const date = dayjs(_date).toDate();
  const year = date.getFullYear();
  const month = date.getMonth();
  const days = new Date(year, month + 1, 0).getDate();

  const firstDay = new Date(year, month, 1, 0, 0, 0);
  const lastDay = new Date(year, month, days, 0, 0, 0);

  return daysFromTo(firstDay, lastDay);
}

/**
 * Get list days by month. Maybe has pre month, next month.
 */
export function getDaysByMonth(
  mDate: string | Date | Dayjs | number,
  firstDayOfWeek: number,
  showSixWeeks?: boolean
) {
  const days = daysInMonth(mDate);
  let before: Dayjs[] = [];
  let after: Dayjs[] = [];
  // caculate first day of week(ex: firstDayOfWeek > 7)
  const fdow = (7 + firstDayOfWeek) % 7 || 7;
  // caculate last day of week by first day of week
  const ldow = (fdow + 6) % 7;
  const from = dayjs(days[0]);
  const daysBefore = from.day();

  if (from.day() !== fdow) {
    // subtract if current date not equals first day of week
    from.add(-(from.day() + 7 - fdow) % 7, 'day');
  }

  const to = dayjs(days[days.length - 1]);
  const day = to.day();
  if (day !== ldow) {
    // add if laste date not equals last day of week
    to.add((ldow + 7 - day) % 7, 'day');
  }

  const daysForSixWeeks = (daysBefore + days.length) / 6 >= 6;
  // check size days pluss days before divide 6 enough or not 6 weeks
  if (showSixWeeks && !daysForSixWeeks) {
    to.add(7, 'day');
  }
  if (isLTE(from, dayjs(days[0]))) {
    before = daysFromTo(from, days[0]);
  }
  if (isGTE(to, days[days.length - 1])) {
    after = daysFromTo(days[days.length - 1], to);
  }
  return before.concat(days.slice(1, days.length - 1), after);
}

/**
 * Get time ago like facebook. (ex: a day ago).
 */
export function getTimeDifference(date: Date | string): {
  count: number | null;
  tx: string;
} {
  const timeDifference = dayjs().diff(dayjs(date), 'seconds');

  const yearTime = 60 * 60 * 24 * 365;
  const monthTime = 60 * 60 * 24 * 30;
  const dayTime = 60 * 60 * 24;
  const hourTime = 60 * 60;
  const minutesTime = 60;

  const yearCalculator = Math.floor(timeDifference / yearTime);
  const monthCalculator = Math.floor(timeDifference / monthTime);
  const dayCalculator = Math.floor(timeDifference / dayTime);
  const hourCalculator = Math.floor(timeDifference / hourTime);
  const minutesCalculator = Math.floor(timeDifference / minutesTime);

  switch (true) {
    case yearCalculator > 1:
      return { count: yearCalculator, tx: 'txYearsAgo' };
    case yearCalculator > 0:
      return { count: yearCalculator, tx: 'txYearAgo' };

    case monthCalculator > 1:
      return { count: monthCalculator, tx: 'txMonthsAgo' };
    case monthCalculator > 0:
      return { count: monthCalculator, tx: 'txMonthAgo' };

    case dayCalculator > 1:
      return { count: dayCalculator, tx: 'txDaysAgo' };
    case dayCalculator > 0:
      return { count: dayCalculator, tx: 'txDayAgo' };

    case hourCalculator > 1:
      return { count: hourCalculator, tx: 'txHoursAgo' };
    case hourCalculator > 0:
      return { count: hourCalculator, tx: 'txHourAgo' };

    case minutesCalculator > 1:
      return { count: minutesCalculator, tx: 'txMinutesAgo' };
    case minutesCalculator > 0:
      return { count: minutesCalculator, tx: 'txMinuteAgo' };

    case timeDifference > 1:
      return { count: timeDifference, tx: 'txSecondsAgo' };
    default:
      return { count: null, tx: 'txFewSecondsAgo' };
  }
}

export function formatDate(
  date: string | undefined | Date,
  format = DATE_FORMAT_YYYY_MM_DD
) {
  return dayjs(date).format(format);
}

export function getDatesBetween(
  startDate: Date,
  endDate: Date,
  dateFormat = DATE_FORMAT_YYYY_MM_DD
) {
  const dates = [];
  const end = dayjs(endDate);
  const start = dayjs(startDate);
  const diff = end.diff(start, 'days');

  if (!start.isValid() || !start.isValid() || diff <= 0) {
    return;
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < diff - 1; i++) {
    dates.unshift(end.subtract(1, 'd').format(dateFormat));
  }

  return dates;
}

// The method returns 1 if date1 is greater than date2
// The method returns 0 if date1 equals date2
// The method returns -1 if date1 is less than date2
export function handleCompareDate(
  date1: string | undefined | Date,
  date2: string | undefined | Date,
  format = DATE_FORMAT_YYYY_MM_DD
) {
  const dayjsA = dayjs(date1, format);
  const dayjsB = dayjs(date2, format);
  if (dayjsA > dayjsB) {
    return 1;
  }
  if (dayjsA < dayjsB) {
    return -1;
  }
  return 0;
}

export function getYearByDate(date: Date | string) {
  if (typeof date === 'string') {
    return dayjs(date, 'YYYY/MM/DD').year();
  }
  return date.getFullYear();
}

export function getMonthByDate(date: Date | string) {
  if (typeof date === 'string') {
    return dayjs(date, 'YYYY/MM/DD').format('M');
  }
  return date.getMonth();
}

export function getDayByDate(date: Date | string) {
  if (typeof date === 'string') {
    return dayjs(date, 'YYYY/MM/DD').date();
  }
  return date.getDay();
}

export function getDaysInMonthAndYear(monthAndYear: string) {
  return dayjs(monthAndYear, 'YYYY-MM').daysInMonth();
}

export const CURRENT_YEAR = getYearByDate(new Date());
export const MAX_YEAR = CURRENT_YEAR;
export const CURRENT_MONTH = getMonthByDate(new Date());
export const MIN_YEAR = MAX_YEAR - 5;
export const CURRENT_TIME = dayjs().format('HH:mm');
export const CURRENT_HOUR = dayjs().hour();
export const CURRENT_MINUTE = dayjs().minute();
export const CURRENT_DATE = dayjs().format('YYYY-MM-DD');
export const CURRENT_DATE_TIME = dayjs().format('YYYY-MM-DD HH:mm');

export function getStartEndDateOfWeekByDate(
  date: string,
  format = DATE_FORMAT_YYYY_MM_DD
): { beginOfWeek: string; endOfWeek: string } {
  const today = dayjs(date);
  const beginOfWeek = today.day(1).format(format);
  const endOfWeek = today.day(7).format(format);

  return { beginOfWeek, endOfWeek };
}

export const getStartEndWeekByDateCustom = (date: Date) => {
  const { beginOfWeek } = getStartEndDateOfWeekByDate(formatDate(date));
  let { endOfWeek } = getStartEndDateOfWeekByDate(formatDate(date));
  if (handleCompareDate(endOfWeek, new Date()) === 1) {
    endOfWeek = formatDate(new Date());
  }
  return {
    startDate: beginOfWeek,
    endDate: endOfWeek,
  };
};

export function handleCompareDateTime(
  date1: string | undefined | Date,
  date2: string | undefined | Date,
  format = DATE_FORMAT_YYYY_MM_DD_HH_MM
) {
  const dayjsA = dayjs(date1, format);
  const dayjsB = dayjs(date2, format);
  if (dayjsA > dayjsB) {
    return 1;
  }
  if (dayjsA < dayjsB) {
    return -1;
  }
  return 0;
}
