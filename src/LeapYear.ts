const isLeapYear = (year: number) => {
  if (year < 1600) {
    throw Error('The year needs to be from 1600 to 4000');
  }

  return false;
};

export default isLeapYear;
