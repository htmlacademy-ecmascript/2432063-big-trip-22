import { getRandomPointTrip } from '../mock/mock-date';

const POINTS_COUNT = 3;

export default class LiastPointsTripModel {
  constructor() {
    this.listPointsTrip = Array.from({ length: POINTS_COUNT }, getRandomPointTrip);
  }

  getPoints = () => this.listPointsTrip;
}
