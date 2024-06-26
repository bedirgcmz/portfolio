// export const getImageURLHakkimizda = (imageName) => {
//   return new URL(`${process.env.PUBLIC_URL}/projects/${imageName}`, import.meta.url).href;
// };

export const getImageURL = (imageName) => {
  return `${process.env.PUBLIC_URL}/projects/${imageName}`;
};


export const getImageURLOnecikanlar = (imageName) => {
  return new URL(`../assets/images/Onecikanlar/${imageName}`, import.meta.url).href;
};

export const getImageURLGenel = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};

