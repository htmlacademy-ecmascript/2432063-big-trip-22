import { getRandomArrayElement } from '../utils';
import { EVENT_TYPE } from '../const';

const mockPointTrip = [
  {
    dateTime: '15 мар',
    eventType: getRandomArrayElement(EVENT_TYPE),
    startTime: '',
    endTime: '',
    duratiom: '30M',
    price: '100$',
    offer: '',
    isFavorite: true,
  },

  {
    dateTime: '16 мар',
    eventType: getRandomArrayElement(EVENT_TYPE),
    startTime: '',
    endTime: '',
    duratiom: '60M',
    price: '200$',
    offer: '',
    isFavorite: false,
  },

  {
    dateTime: '17 мар',
    eventType: getRandomArrayElement(EVENT_TYPE),
    startTime: '',
    endTime: '',
    duratiom: '90M',
    price: '300$',
    offer: '',
    isFavorite: true,
  },
];

const getRandomPointTrip = () => getRandomArrayElement(mockPointTrip);

export {getRandomPointTrip};
