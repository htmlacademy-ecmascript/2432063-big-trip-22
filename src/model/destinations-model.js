export default class DestinationsModel {
  #destinations = null;
  constructor(destinations) {
    this.#destinations = destinations;
  }

  get byId () {
    return this.#destinations;
  }
}
