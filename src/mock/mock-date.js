import { getRandomArrayElement } from '../utils';
import { EVENT_TYPE } from '../const';

const mockPointTrip = [
  {
    dateTime: '15 мар',
    eventType: getRandomArrayElement(EVENT_TYPE),
    startTime: '',
    endTime: '',
    duration: '30M',
    price: '100',
    offer: [
      'offer1',
      'offer2'
    ],
    isFavorite: true,
  },

  {
    dateTime: '16 мар',
    eventType: getRandomArrayElement(EVENT_TYPE),
    startTime: '',
    endTime: '',
    duration: '60M',
    price: '200',
    offer: [
      'offer1',
      'offer3'
    ],
    isFavorite: false,
  },

  {
    dateTime: '17 мар',
    eventType: getRandomArrayElement(EVENT_TYPE),
    startTime: '',
    endTime: '',
    duration: '90M',
    price: '300',
    offer: [ ],
    isFavorite: true,
  },
];



const getRandomPointTrip = () => getRandomArrayElement(mockPointTrip);

export {getRandomPointTrip};
