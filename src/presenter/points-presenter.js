import { render, replace } from '../framework/render.js';
import TripEventList from '../view/trip-events-list.js';
import EventEdit from '../view/event-edit.js';

export default class PointsPresenter {
  #boardContainer;
  #destinations;
  #point;
  #offer;
  #onEventChange = null;

  constructor({boardContainer, onEventChange}) {
    this.#boardContainer = boardContainer;
    this.#onEventChange = onEventChange;

  }

  init(destinations, point, offer) {
    this.#point = point;
    this.#destinations = destinations;
    this.#offer = offer;

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceEditToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new TripEventList({
      destinations,
      point,
      offer,
      onPointClick: () => {
        replacePoinToEdit();
        document.addEventListener('keydown', escKeyDownHandler);
      },
      onFavoriteClick: () => {
        this.#onEventChange({
          ...this.#point,
          isFavorite: !this.#point.isFavorite,
        });

      }
    });
    const pointEdit = new EventEdit({
      destinations,
      point,
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
