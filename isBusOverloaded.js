const isBusOverloaded = (pickAndDropTimeArr, limit) => {
  let isOverLoaded = false,
    sum = 0,
    max = 0;
  const obj = {};

  for (let [pick, drop, person] of pickAndDropTimeArr) {
    obj[pick] = person;
    obj[drop] = -person;
  }

  for (const key in obj) {
    sum += obj[key];
    max = Math.max(max, sum);

    if (max > limit) {
      isOverLoaded = true;
      break;
    }
  }

  return isOverLoaded;
};

console.log(
  isBusOverloaded(
    [
      [1, 4, 2],
      [2, 6, 2],
      [5, 7, 1],
    ],
    4
  )
);
