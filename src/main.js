import tripFilter from './view/trip-filter.js';
import {render} from './render.js';

const pageHeader = document.querySelector('.page-header');
const tripFilterControlPanel = pageHeader.querySelector('.trip-controls__filters');
render(new tripFilter(), tripFilterControlPanel);
