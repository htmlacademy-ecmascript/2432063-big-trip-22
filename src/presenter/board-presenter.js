import { render } from '../render.js';
import tripEventList from '../view/trip-events-list.js';
import sortListTrip from '../view/sort-list-trip.js';
import eventEdit from '../view/event-edit.js';

export default class BoardPresenter {

  constructor({boardContainer, liastPointsTripModel, offersModel}) {
    this.boardContainer = boardContainer;
    this.liastPointsTripModel = liastPointsTripModel;
    this.offersModel = offersModel;
  }

  init() {
    this.liastPoints = [...this.liastPointsTripModel.getPoints()];
    this.offersModel = [...this.offersModel.getByType()];

    render (new sortListTrip(), this.boardContainer);
    render (new eventEdit(), this.boardContainer);

    for (let i = 0; i <= this.liastPoints.length; i++) {
      render (new tripEventList({point: this.liastPoints[i], offer: this.offersModel}), this.boardContainer);
    }
  }
}
