import { brands, models } from '../base-components/constant';
import { Car } from '../base-components/types';
import { generateColor } from './generateColor';

const getRandNameCar = (): string => {
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const model = models[Math.floor(Math.random() * models.length)];
  return `${brand} ${model}`;
};

export const getRandomCar = (arrCount = 100): Array<Car> =>
  new Array(arrCount).fill(1).map(() => ({
    name: getRandNameCar(),
    color: generateColor(),
  }));
