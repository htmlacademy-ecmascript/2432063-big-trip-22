import { render } from '../render.js';
import tripEventList from '../view/trip-events-list.js';
import sortListTrip from '../view/sort-list-trip.js';
import eventEdit from '../view/event-edit.js';

export default class BoardPresenter {

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render (new sortListTrip(), this.boardContainer);
    render (new eventEdit(), this.boardContainer);
    for (let i = 1; i <= 3; i++) {
      render (new tripEventList(), this.boardContainer);
    }
  }
}
