import AbstractView from '../framework/view/abstract-view';

const createListEventsTemplate = () => `
  <ul class="trip-events__list"></ul>
`;

export default class ListEventsView extends AbstractView {
  get template() {
    return createListEventsTemplate();
  }
}
