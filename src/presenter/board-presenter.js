import {render} from './render.js';
import sortListTrip from './view/sort-list-trip.js';

export default class BoardPresenter {

  constructor({ boardContainer }) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(new sortListTrip(), this.boardContainer);
  }
}
