import { render } from '../framework/render';
import SortListTrip from '../view/sort-list-trip.js';
import PointsPresenter from './points-presenter.js';

export default class BoardPresenter {
  #boardContainer;
  #listPointsTripModel;
  #offersModel;
  #destinationsModel;
  #liastPoints;
  #destinations;

  constructor({boardContainer, listPointsTripModel, offersModel, destinationsModel}) {
    this.#boardContainer = boardContainer;
    this.#listPointsTripModel = listPointsTripModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
  }

  init() {
    this.#liastPoints = [...this.#listPointsTripModel.points];
    this.#offersModel = [...this.#offersModel.byType];
    this.#destinations = [...this.#destinationsModel.byId];

    render (new SortListTrip(), this.#boardContainer);

    for (let i = 0; i <= this.#liastPoints.length; i++) {
      this.#renderPoint(this.#destinations, this.#liastPoints[i], this.#offersModel);
    }
  }

  #renderPoint(destinations, point, offer) {
    const pointsPresenter = new PointsPresenter({
      boardContainer: this.#boardContainer,}
    );
    pointsPresenter.init(destinations, point, offer);
  }
}


