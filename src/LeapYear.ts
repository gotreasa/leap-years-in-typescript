const isValidYear = (year: number) => {
  if (year < 1600 || year > 4000) {
    throw Error('The year needs to be from 1600 to 4000');
  }
};

const isLeapYear = (year: number) => {
  isValidYear(year);

  if (year === 1700 || year === 1800) return false;

  if (year % 4 === 0) return true;

  return false;
};

export default isLeapYear;
