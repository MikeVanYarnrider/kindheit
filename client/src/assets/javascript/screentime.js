const myScreenTime = () => {
  let seconds = 0;
  setInterval(() => {
    seconds = seconds + 1;
    return seconds;
  }, 1000);
  console.log(seconds);
};

export { myScreenTime };
