import tripFilter from './view/trip-filter.js';
import {render} from './render.js';
import tripEventList from './view/trip-events-list.js';
import sortListTrip from './view/sort-list-trip.js';

const pageHeader = document.querySelector('.page-header');
const tripFilterControlPanel = pageHeader.querySelector('.trip-controls__filters');
render(new tripFilter(), tripFilterControlPanel);


const tripEvents = document.querySelector('.trip-events');
render (new sortListTrip(), tripEvents);

for (let i = 1; i <= 3; i++) {
  render (new tripEventList(), tripEvents);
}
