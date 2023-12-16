import { render } from '../render.js';
import tripEventList from '../view/trip-events-list.js';
import sortListTrip from '../view/sort-list-trip.js';
import eventEdit from '../view/event-edit.js';

export default class BoardPresenter {

  constructor({boardContainer, liastPointsTripModel}) {
    this.boardContainer = boardContainer;
    this.liastPointsTripModel = liastPointsTripModel;
  }

  init() {
    this.liastPoints = [...this.liastPointsTripModel.getPoints()];

    render (new sortListTrip(), this.boardContainer);
    render (new eventEdit(), this.boardContainer);
    for (let i = 0; i <= this.liastPoints.length; i++) {
      render (new tripEventList({point: this.liastPoints[i]}), this.boardContainer);
    }
  }
}
