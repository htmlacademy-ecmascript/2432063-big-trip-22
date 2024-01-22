import { getRandomPointTrip } from '../mock/mock-date';

const POINTS_COUNT = 3;

export default class ListPointsTripModel {
  #listPointsTrip = null;
  constructor() {
    this.#listPointsTrip = Array.from({ length: POINTS_COUNT }, getRandomPointTrip);
  }

  get points () {
    return this.#listPointsTrip;
  }
}
