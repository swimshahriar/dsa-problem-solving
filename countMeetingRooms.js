const calculateRoomsNeeded = (timeArr) => {
  let countRooms = 0,
    sum = 0;
  const obj = {};

  for (let item of timeArr) {
    obj[item[0]] = (obj[item[0]] || 0) + 1;
    obj[item[1]] = (obj[item[1]] || 0) - 1;
  }

  for (let key in obj) {
    sum += obj[key];
    countRooms = Math.max(countRooms, sum);
  }

  return countRooms;
};

console.log(
  calculateRoomsNeeded([
    [1, 6],
    [2, 4],
    [2, 6],
    [8, 10],
  ])
);
