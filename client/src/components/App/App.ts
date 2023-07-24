import { getCars } from './Requests/Requests';
const { items: cars, count: carsCount } = await getCars(1);
const animation: { [key: number]: { id: number } } = {};
export default {
  cars,
  carsCount,
  carsPage: 1,
  animation,
};
