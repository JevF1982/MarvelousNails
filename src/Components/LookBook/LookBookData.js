export const photos = () => {
  let array = [];
  for (let index = 1; index <= 29; index++) {
    array.push({
      src: require(`../static/nails/nail-img (${index}).jpg`),
      width: Math.floor(Math.random() * 7) + 3,
      height: Math.floor(Math.random() * 5) + 3,
    });
  }
  return array;
};
