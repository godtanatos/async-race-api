import {
  NextBtn,
  PrevBtn,
  formBtn,
  formFieldColor,
  formFieldName,
  formUpdate,
} from '../../..';
import { getGarage, renderGarage } from '../../Garage';
import { getRandomCar } from '../../Utils/generateCars';
import App from '../App';
import {
  getCreateCar,
  getDeleteCarById,
  updateCar,
  updateGarage,
} from '../Requests/Requests';

const onRemoveBtnClick = async (target: HTMLElement) => {
  let id: number;
  if (target.parentElement) {
    if (!target.parentElement.dataset.car) {
      throw new Error('нет dataset');
    } else {
      id = Number(target.parentElement.dataset.car);
    }
    await getDeleteCarById(id);
    await getGarage();
    const garage = document.getElementById('garage') as HTMLDivElement;
    garage.innerHTML = renderGarage();
  }
};
export const OnSelectCar = (target: HTMLElement) => {
  formFieldName.disabled = false;
  formFieldColor.disabled = false;
  formBtn.disabled = false;
  if (target.parentElement) {
    if (!target.parentElement.dataset.car) {
      throw new Error('нет dataset');
    } else {
      formUpdate.dataset.car = target.parentElement.dataset.car;
    }
  }
};
export const onUpdateCar = async (target: HTMLElement) => {
  await updateCar(
    Number(formUpdate.dataset.car),
    formFieldName.value,
    formFieldColor.value
  );
  formFieldName.disabled = true;
  formFieldName.value = '';
  formFieldColor.value = 'white';
  formFieldColor.disabled = true;
  await getGarage();
  const garage = document.getElementById('garage') as HTMLDivElement;
  garage.innerHTML = renderGarage();
};

export const onGenerateBtnClick = async (target: HTMLElement) => {
  const generatedCars = getRandomCar();
  await Promise.all(generatedCars.map(async (car) => getCreateCar(car)));
  await getGarage();
  const garage = document.getElementById('garage') as HTMLDivElement;
  garage.innerHTML = renderGarage();
  console.log(generatedCars);
};
export const onNextPage = async (target: HTMLElement) => {
  App.carsPage++;
  const garage = document.getElementById('garage') as HTMLDivElement;
  console.log(App.carsPage, 'плюч.');
  if (Math.ceil(Number(App.carsCount) / 7) === App.carsPage) {
    NextBtn.disabled = true;
  }
  PrevBtn.disabled = false;
  await getGarage();
  garage.innerHTML = renderGarage();
};
export const onPrevPage = async (target: HTMLElement) => {
  App.carsPage--;
  console.log(App.carsPage, 'vbyece.');
  const garage = document.getElementById('garage') as HTMLDivElement;

  if (App.carsPage === 1) {
    PrevBtn.disabled = true;
  }
  await getGarage();
  garage.innerHTML = renderGarage();
};
/**************************************************************************************** */

export const addLidsters = () => {
  document.addEventListener('click', async (e) => {
    console.log(e.target);
    const target = e.target as HTMLElement;
    if (target === null) {
      throw new Error('нет remove-btn');
    } else if (target.classList.contains('remove-btn')) {
      onRemoveBtnClick(target);
    } else if (target.classList.contains('select-btn')) {
      OnSelectCar(target);
    } else if (target.id === 'update-btn') {
      onUpdateCar(target);
    } else if (target.id === 'generate') {
      onGenerateBtnClick(target);
    } else if (target.id === 'next') {
      onNextPage(target);
    } else if (target.id === 'prev') {
      onPrevPage(target);
    }
  });
  document.addEventListener('submit', (e) => {
    e.preventDefault();
  });
};
