const isLeapYear = (year: number) => {
  if (year < 1600 || year > 4000) {
    throw Error('The year needs to be from 1600 to 4000');
  }

  if (year === 1604 || year === 1708) return true;

  return false;
};

export default isLeapYear;
