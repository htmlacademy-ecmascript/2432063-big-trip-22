import { mockOfferss } from '../mock/mock-date';

export default class OffersModel {
  offers = mockOfferss;

  getByType = () => this.offers;
}
