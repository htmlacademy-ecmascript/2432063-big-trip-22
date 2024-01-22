import AbstractView from '../framework/view/abstract-view';
import { EVENT_TYPE } from '../const.js';

const eventTypes = () => (
  Object.entries(EVENT_TYPE).map(([, eventType]) =>
    `<div class="event__type-item">
    <input id="event-type-${eventType.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${eventType.toLowerCase()}">
    <label class="event__type-label  event__type-label--${eventType.toLowerCase()}" for="event-type-taxi-1">${eventType}</label>
    </div>`).join (' '));

const renderEeventEdit = (destinations, point) => {
  const {type} = point;
  const getByDest = (offerType) => destinations.find(({ id }) => id === offerType);
  const {description} = getByDest('dest1');
  const {src} = getByDest('dest1').pictures[0];
  let eventPhoto = ' ';

  for (let i = 0; i < 4; i++) {
    eventPhoto += `<img class="event__photo" src="${src}"></img>`;
  }


  return (
    `
     <form class="event event--edit" action="#" method="post">
          <header class="event__header">
            <div class="event__type-wrapper">
              <label class="event__type  event__type-btn" for="event-type-toggle-1">
                <span class="visually-hidden">Choose event type</span>
                <img class="event__type-icon" width="17" height="17" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
              </label>
              <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

              <div class="event__type-list">
                <fieldset class="event__type-group">
                  <legend class="visually-hidden">Event type</legend>

                  ${eventTypes()}

                </fieldset>
              </div>
            </div>

            <div class="event__field-group  event__field-group--destination">
              <label class="event__label  event__type-output" for="event-destination-1">
                ${type}
              </label>
              <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">
              <datalist id="destination-list-1">
                <option value="Amsterdam"></option>
                <option value="Geneva"></option>
                <option value="Chamonix"></option>
              </datalist>
            </div>

            <div class="event__field-group  event__field-group--time">
              <label class="visually-hidden" for="event-start-time-1">From</label>
              <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">
              &mdash;
              <label class="visually-hidden" for="event-end-time-1">To</label>
              <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">
            </div>

            <div class="event__field-group  event__field-group--price">
              <label class="event__label" for="event-price-1">
                <span class="visually-hidden">Price</span>
                &euro;
              </label>
              <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
            </div>

            <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
            <button class="event__reset-btn" type="reset">Cancel</button>
          </header>
          <section class="event__details">
            <section class="event__section  event__section--offers">
              <h3 class="event__section-title  event__section-title--offers">Offers</h3>

              <div class="event__available-offers">
                <div class="event__offer-selector">
                  <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
                  <label class="event__offer-label" for="event-offer-luggage-1">
                    <span class="event__offer-title">Add luggage</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">30</span>
                  </label>
                </div>

                <div class="event__offer-selector">
                  <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>
                  <label class="event__offer-label" for="event-offer-comfort-1">
                    <span class="event__offer-title">Switch to comfort class</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">100</span>
                  </label>
                </div>

                <div class="event__offer-selector">
                  <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">
                  <label class="event__offer-label" for="event-offer-meal-1">
                    <span class="event__offer-title">Add meal</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">15</span>
                  </label>
                </div>

                <div class="event__offer-selector">
                  <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">
                  <label class="event__offer-label" for="event-offer-seats-1">
                    <span class="event__offer-title">Choose seats</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">5</span>
                  </label>
                </div>

                <div class="event__offer-selector">
                  <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">
                  <label class="event__offer-label" for="event-offer-train-1">
                    <span class="event__offer-title">Travel by train</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">40</span>
                  </label>
                </div>
              </div>
            </section>

            <section class="event__section  event__section--destination">
              <h3 class="event__section-title  event__section-title--destination">Destination</h3>
              <p class="event__destination-description">${description}</p>

              <div class="event__photos-container">
                <div class="event__photos-tape">
                  ${eventPhoto}
                </div>
              </div>
            </section>
          </section>
        </form>
    `
  );

};

export default class EventEdit extends AbstractView {
  #destinations = null;
  #point = null;
  #handleSaveEdit = null;

  constructor ({destinations, point, onSaveEdit}){
    super();
    this.#destinations = destinations;
    this.#point = point;
    this.#handleSaveEdit = onSaveEdit;

    this.element.querySelector('.event__save-btn').addEventListener('click', this.#saveEditHandler);
  }

  get template() {
    return renderEeventEdit(this.#destinations, this.#point);
  }

  #saveEditHandler = (evt) => {
    evt.preventDefault();
    this.#handleSaveEdit();
  };

}
