export default class OffersModel {
  #offers = null;
  constructor(offers) {
    this.#offers = offers;
  }

  get byType () {
    return this.#offers;
  }
}
