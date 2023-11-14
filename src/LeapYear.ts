const isValidYear = (year: number) => {
  if (year < 1600 || year > 4000) {
    throw Error('The year needs to be from 1600 to 4000');
  }
};
const isDivisibleByFourHundred = (year: number) => {
  return year % 400 === 0;
};

const isLeapYear = (year: number) => {
  isValidYear(year);

  if (isDivisibleByFourHundred(year)) return true;
  if (year % 4 === 0 && year % 100 !== 0) return true;

  return false;
};

export default isLeapYear;
