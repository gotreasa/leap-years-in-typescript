const isValidYear = (year: number) => {
  if (year < 1600 || year > 4000) {
    throw Error('The year needs to be from 1600 to 4000');
  }
};

const isDivisibleByFourHundred = (year: number) => year % 400 === 0;

const isDivisibleAsLeapYear = (year: number) =>
  year % 4 === 0 && year % 100 !== 0;

const isLeapYear = (year: number) => {
  isValidYear(year);

  if (isDivisibleByFourHundred(year)) return true;
  if (isDivisibleAsLeapYear(year)) return true;

  return false;
};

export default isLeapYear;
