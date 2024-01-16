import { render, replace } from '../framework/render';
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

    for (let i = 0; i <= this.#liastPoints.length; i++) {
      this.#renderPoint(this.#destinations, this.#liastPoints[i], this.#offersModel);
    }
  }

  #renderPoint(destinations, point, offer) {

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceEditToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new tripEventList({
      destinations,
      point,
      offer,
      onPointClick: () => {
        replacePoinToEdit();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });
    const pointEdit = new eventEdit({
      destinations,
      onSaveEdit: () => {
        replaceEditToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replacePoinToEdit() {
      replace(pointEdit, pointComponent);
    }

    function replaceEditToPoint() {
      replace(pointComponent, pointEdit);
    }

    render (pointComponent, this.#boardContainer);
  }
}


