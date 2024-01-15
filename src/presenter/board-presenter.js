import { render } from '../framework/render';
import tripEventList from '../view/trip-events-list.js';
import sortListTrip from '../view/sort-list-trip.js';
import eventEdit from '../view/event-edit.js';

export default class BoardPresenter {
  #boardContainer;
  #liastPointsTripModel;
  #offersModel;
  #destinationsModel;
  #liastPoints;
  #destinations;

  constructor({boardContainer, listPointsTripModel, offersModel, destinationsModel}) {
    this.#boardContainer = boardContainer;
    this.#liastPointsTripModel = listPointsTripModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
  }

  init() {
    this.#liastPoints = [...this.#liastPointsTripModel.points];
    this.#offersModel = [...this.#offersModel.byType];
    this.#destinations = [...this.#destinationsModel.byId];

    render (new sortListTrip(), this.#boardContainer);
    render (new eventEdit({destinations: this.#destinations}), this.#boardContainer);

    for (let i = 0; i <= this.#liastPoints.length; i++) {
      this.#renderPoint(this.#liastPoints[i], this.#offersModel, this.#destinations);
    }
  }

  #renderPoint(point, offer, destinations) {
    const pointComponent = new tripEventList({point, offer, destinations});
    render (pointComponent, this.#boardContainer);
  }
}


