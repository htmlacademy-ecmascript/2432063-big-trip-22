import tripFilter from './view/trip-filter.js';
import {render} from './render.js';
import BoardPresenter from './presenter/board-presenter.js';

const pageHeader = document.querySelector('.page-header');
const tripFilterControlPanel = pageHeader.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');

const boardPresenter = new BoardPresenter({boardContainer: tripEvents});

render(new tripFilter(), tripFilterControlPanel);
boardPresenter.init();
