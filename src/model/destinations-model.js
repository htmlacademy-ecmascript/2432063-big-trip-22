import { loadDestinations } from '../mock/mock-date';

export default class DestinationsModel {
  destinations = loadDestinations;

  getById = () => this.destinations;
}
