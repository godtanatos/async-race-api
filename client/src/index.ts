import { getGarage, renderGarage } from './components/Garage';
import { renderPage } from './components/GeneralPage';
import {
  getCreateCar,
  getStartEngine,
} from './components/App/Requests/Requests';
import './style.scss';
import { addLidsters } from './components/App/Listener';
import { getRandomCar } from './components/Utils/generateCars';
import { Engine } from './components/base-components/types';
import { URL } from './components/base-components/constant';
import { startDriving } from './components/Utils/driving';

const bodyElement = document.querySelector('body') as HTMLBodyElement;
if (bodyElement === null) {
  throw new Error('нет body элемента');
}

bodyElement.innerHTML = renderPage();

const createForm = document.getElementById('create-form') as HTMLFormElement;
createForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const garage = document.getElementById('garage') as HTMLDivElement;
  const nameInput = document.getElementById('create-name') as HTMLInputElement;
  const colorInput = document.getElementById(
    'create-color'
  ) as HTMLInputElement;

  const car = { name: nameInput.value, color: colorInput.value };

  await getCreateCar(car);
  await getGarage();

  garage.innerHTML = renderGarage();
  nameInput.value = '';
  colorInput.value = '';
});
addLidsters();
export const formBtn = document.getElementById(
  'update-btn'
) as HTMLInputElement;
export const formUpdate = document.getElementById(
  'update-form'
) as HTMLFormElement;
export const formFieldName = document.getElementById(
  'update-name'
) as HTMLInputElement;
export const formFieldColor = document.getElementById(
  'update-color'
) as HTMLInputElement;
export const NextBtn = document.getElementById('next') as HTMLInputElement;
export const PrevBtn = document.getElementById('prev') as HTMLInputElement;

const { velocity, distance }: Engine = await getStartEngine(1);
console.log(velocity, distance);
startDriving(1);
startDriving(2);
startDriving(3);
startDriving(4);
startDriving(5);
