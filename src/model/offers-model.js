import { mockOfferss } from '../mock/mock-date';

export default class OffersModel {
  offers = mockOfferss;

  getByType = () => this.offers;
}


// getByType = (offerType) => mockOffers.find(({ type }) => type === offerType);
// const {id, title, price} = getByType('Bus').offers[0]
// console.log(id, title, price)


