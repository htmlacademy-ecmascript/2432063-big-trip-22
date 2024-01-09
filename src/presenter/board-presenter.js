import { render } from '../render.js';
import tripEventList from '../view/trip-events-list.js';
import sortListTrip from '../view/sort-list-trip.js';
import eventEdit from '../view/event-edit.js';

export default class BoardPresenter {

  constructor({boardContainer, listPointsTripModel, offersModel, destinationsModel}) {
    this.boardContainer = boardContainer;
    this.liastPointsTripModel = listPointsTripModel;
    this.offersModel = offersModel;
    this.destinationsModel = destinationsModel;
  }

  init() {
    this.liastPoints = [...this.liastPointsTripModel.getPoints()];
    this.offersModel = [...this.offersModel.getByType()];
    this.destinations = [...this.destinationsModel.getById()];

    render (new sortListTrip(), this.boardContainer);
    render (new eventEdit({destinations: this.destinations}), this.boardContainer);

    for (let i = 0; i <= this.liastPoints.length; i++) {
      render (new tripEventList({point: this.liastPoints[i], offer: this.offersModel, destinations: this.destinations}), this.boardContainer);
    }
  }
}
