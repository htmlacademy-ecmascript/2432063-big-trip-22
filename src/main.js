import tripFilter from './view/trip-filter.js';
import {render} from './render.js';
import BoardPresenter from './presenter/board-presenter.js';
import LiastPointsTripModel from './model/trip-events-list-model.js';
import OffersModel from './model/offers-model.js';


const pageHeader = document.querySelector('.page-header');
const tripFilterControlPanel = pageHeader.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');

const ooo = OffersModel();
const liastPointsTripModel = new LiastPointsTripModel();

const boardPresenter = new BoardPresenter({
  boardContainer: tripEvents,
  liastPointsTripModel,

});

render(new tripFilter(), tripFilterControlPanel);
boardPresenter.init();

