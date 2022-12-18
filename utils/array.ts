const pickOne = <T>(array: T[]) =>  array[Math.floor(Math.random() * array.length)];

const remove = <T>(array: T[], value: T) => {
  const index = array.indexOf(value);
  if (index > -1) {
    array.splice(index, 1);
  }
};

const pushIfExist = <T>(array: T[], value: T) => {
  const index = array.indexOf(value);
  if (index === -1) {
    array.push(value);
  }
};

export {pickOne, pushIfExist,remove};