import App from '../App/App';
import { getCars } from '../App/Requests/Requests';
import { renderCar } from '../Car/car';
import { URL } from '../base-components/constant';
import { Car } from '../base-components/types';

export const getGarage = async (): Promise<Array<Car>> => {
  const response = await fetch(`${URL}/garage`);
  const resp: Array<Car> = await response.json();
  const { items, count } = await getCars(App.carsPage);
  App.cars = items;
  App.carsCount = count;
  return resp;
};

export const renderGarage = (): string => `
  <h2 class="title">Garage (${App.carsCount} cars)</h2>
    <p class="text">Page #${App.carsPage}</p>
    <ul class="cars">
    ${App.cars.map((car) => `<li>${renderCar(car)}</li>`).join('')}
    </ul>
`;
