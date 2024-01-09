import TripFilter from './view/trip-filter.js';
import BoardPresenter from './presenter/board-presenter.js';
import LiastPointsTripModel from './model/trip-events-list-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';
import {render} from './framework/render';
import { mockOfferss, loadDestinations } from './mock/mock-date.js';

const pageHeader = document.querySelector('.page-header');
const tripFilterControlPanel = pageHeader.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');


const listPointsTripModel = new LiastPointsTripModel();
const offersModel = new OffersModel(mockOfferss);
const destinationsModel = new DestinationsModel(loadDestinations);

const boardPresenter = new BoardPresenter({
  boardContainer: tripEvents,
  listPointsTripModel,
  offersModel,
  destinationsModel,
});

render(new TripFilter(), tripFilterControlPanel);
boardPresenter.init();

