const getRandomEmojis = (arr) => {
  const randomEmojis = [];
  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length);

    if (randomEmojis.includes(arr[randomIndex])) {
      randomIndex = Math.floor(Math.random() * arr.length);
    } else {
      randomEmojis.push(arr[randomIndex]);
    }
  }
  return randomEmojis;
};

export default getRandomEmojis;
