export const photos = () => {
  let array = [];
  for (let index = 1; index <= 56; index++) {
    array.push(
      `https://d1qq0qaiiococ4.cloudfront.net/lookbookpage/nail (${index}).jpg`
    );
  }
  return array;
};
