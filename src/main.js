import tripFilter from './view/trip-filter.js';
import {render} from './render.js';
import tripEventItem from './view/trip-events-item.js';

const pageHeader = document.querySelector('.page-header');
const tripFilterControlPanel = pageHeader.querySelector('.trip-controls__filters');
render(new tripFilter(), tripFilterControlPanel);

const tripEvents = document.querySelector('.trip-events');
for (let i = 1; i <= 3; i++) {
  render (new tripEventItem(), tripEvents);
}
