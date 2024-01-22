import AbstractView from '../framework/view/abstract-view';
import { getDuratiomAsString, getHoursFromString, getMinutesFromString, normalizeEventDate } from '../utils';


const renderTripEventItems = (destinations, point, offer) => {
  const {dateFrom, dateTo, basePrice, type, isFavorite, destination} = point;
  const favorite = isFavorite ? 'active' : '';

  const getByType = (offerType) => offer.find(() => type === offerType);
  const getByDest = (offerType) => destinations.find(({ id }) => id === offerType);

  const {title, price} = getByType(type).offers[0];
  const {name} = getByDest(destination);

  return (
    `
    <ul class="trip-events__list">
      <li class="trip-events__item">
        <div class="event">
          <time class="event__date" datetime=${dateFrom}> ${normalizeEventDate(dateFrom)}</time>
            <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${type} ${name}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${dateFrom}"> ${getHoursFromString(dateFrom)}:
                    ${getMinutesFromString(dateFrom)}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${dateTo}">${getHoursFromString(dateTo)}:${getMinutesFromString(dateTo)}</time>
                  </p>
                  <p class="event__duration">${getDuratiomAsString(dateFrom, dateTo)}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${basePrice + price}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  <li class="event__offer">
                    <span class="event__offer-title">${title}</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">${price}</span>
                  </li>
                </ul>
                <button class="event__favorite-btn event__favorite-btn--${favorite}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>
           </ul>
`);
};


export default class TripEventList extends AbstractView {
  #point = null;
  #offer = null;
  #destinations = null;
  #handleClickPoint = null;

  constructor ({destinations, point, offer, onPointClick}){
    super();
    this.#point = point;
    this.#offer = offer;
    this.#destinations = destinations;
    this.#handleClickPoint = onPointClick;

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickPoint);
  }

  get template() {
    return renderTripEventItems(this.#destinations, this.#point, this.#offer);
  }

  #editClickPoint = (evt) => {
    evt.preventDefault();
    this.#handleClickPoint();
  };
}
