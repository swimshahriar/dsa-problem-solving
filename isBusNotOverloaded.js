const isBusNotOverloaded = (pickAndDropTimeArr, limit) => {
  let isNotOverLoaded = true,
    sum = 0,
    max = 0;
  const obj = {};

  for (let [pick, drop, person] of pickAndDropTimeArr) {
    obj[pick] = (obj[pick] || 0) + person;
    obj[drop] = (obj[drop] || 0) - person;
  }

  for (const key in obj) {
    sum += obj[key];
    max = Math.max(max, sum);

    if (max > limit) {
      isNotOverLoaded = false;
      break;
    }
  }

  return isNotOverLoaded;
};

const pickAndDropArr = [
  [1, 4, 2],
  [2, 6, 2],
  [6, 7, 2],
];

console.log(isBusNotOverloaded(pickAndDropArr, 4));
