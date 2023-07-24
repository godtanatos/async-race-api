export type Car = {
  name: string;
  color: string;
  id?: number;
  isEngineStarted?: boolean;
};

export type Engine = { velocity: number; distance: number };
export type StatusCar = { success: boolean; id: number; time: number };
