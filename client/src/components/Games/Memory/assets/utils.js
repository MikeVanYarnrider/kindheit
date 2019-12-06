const shuffle = arr => {
  const duplicated = Array(2)
    .fill(arr)
    .flat();

  let currentIndex = duplicated.length,
    tempValue,
    randomIndex;

  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    tempValue = duplicated[currentIndex];
    duplicated[currentIndex] = duplicated[randomIndex];
    duplicated[randomIndex] = tempValue;
  }

  return duplicated;
};

export { shuffle };
