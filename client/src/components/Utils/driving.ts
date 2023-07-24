import App from '../App/App';
import { getDriveStatus, getStartEngine } from '../App/Requests/Requests';
import { Engine, StatusCar } from '../base-components/types';
import { animation, getDistanceBtwElements } from './animation';

export const root = document.querySelector('#root') as HTMLBodyElement;
export const getCarElem = (id: number): HTMLElement =>
  document.getElementById(`car-${id}`) as HTMLElement;
export const getFinishElem = (id: number): HTMLElement =>
  document.getElementById(`finish-${id}`) as HTMLDivElement;
export const getStartBtn = (id: number): HTMLButtonElement =>
  document.getElementById(`start-engine-car-${id}`) as HTMLButtonElement;
export const getStopBtn = (id: number): HTMLButtonElement =>
  document.getElementById(`stop-engine-car-${id}`) as HTMLButtonElement;

export const startDriving = async (id: number): Promise<StatusCar> => {
  const startBtn = getStartBtn(id);
  startBtn.disabled = true;
  startBtn.classList.toggle('enabling', true);
  const { velocity, distance }: Engine = await getStartEngine(id);
  const time = Math.round(distance / velocity);
  startBtn.classList.toggle('enabling', false);
  const stopBtn = getStopBtn(id);
  stopBtn.disabled = false;
  const car = getCarElem(id);
  const finish = getFinishElem(id);
  const distanceBtwElem = Math.floor(getDistanceBtwElements(car, finish)) + 100;
  App.animation[id] = animation(car, distanceBtwElem, time);
  console.log('dyenhb aeyrwbb');
  const { success } = await getDriveStatus(id);
  if (!success) window.cancelAnimationFrame(App.animation[id].id);
  return { success, id, time };
};
