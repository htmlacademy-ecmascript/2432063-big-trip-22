import { mockOffers } from '../mock/mock-date';

export default class OffersModel {
  offers = mockOffers();

  getByType = (offerType) => this.offers.find(({ type }) => type === offerType);
}
