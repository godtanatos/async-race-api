import { URL } from '../../base-components/constant';
import { Car, Engine } from '../../base-components/types';
import App from '../App';

export const getCars = async (
  page: number,
  limit = 7
): Promise<{ items: Array<Car>; count: string }> => {
  const response = await fetch(`${URL}/garage?_page=${page}&_limit=${limit}`);

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count') as string,
  };
};

export const getCarById = async (id: string): Promise<Car> =>
  (await fetch(`${URL}/garage/${id}`)).json();
export const getCreateCar = async (car: {
  name: string;
  color: string;
}): Promise<Response> =>
  (
    await fetch(`${URL}/garage`, {
      method: 'POST',
      body: JSON.stringify(car),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const getDeleteCarById = async (id: number): Promise<Car> =>
  (await fetch(`${URL}/garage/${id}`, { method: 'DELETE' })).json();

export const updateGarage = async (): Promise<void> => {
  const { items, count } = await getCars(App.carsPage);
  App.cars = items;
  App.carsCount = count;
  const nextBtn = document.getElementById('next') as HTMLButtonElement;
  nextBtn.disabled = App.carsPage * 7 >= Number(App.carsCount);

  const prevBtn = document.getElementById('prev') as HTMLButtonElement;
  prevBtn.disabled = App.carsPage <= 1;
};

export const updateCar = async (
  id: number,
  nameCar: string,
  colorCar: string
): Promise<void> =>
  (
    await fetch(`${URL}/garage/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name: nameCar, color: colorCar }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const getStartEngine = async (id: number): Promise<Engine> =>
  (
    await fetch(`${URL}/engine?id=${id}&status=started`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const getDriveStatus = async (
  id: number
): Promise<{ success: boolean }> => {
  const res = await fetch(`${URL}/engine?id=${id}&status=drive`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    } ).catch();
  return res.status !== 200 ? { success: false } : { ...(await res.json()) };
};
