import { getRandomArrayElement } from '../utils';
import { EVENT_TYPE } from '../const';

const mockPointTrip = [
  {
    id: '001',
    basePrice: 1100,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'dest1',
    isFavorite: false,
    offers: [
      'offer1',
      'offer2',
    ],
    type: getRandomArrayElement(EVENT_TYPE),

    duration: '30M',

  },

  {
    id: '002',
    basePrice: 2100,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'dest1',
    isFavorite: true,
    offers: ['offer3'],
    type: getRandomArrayElement(EVENT_TYPE),

    duration: '30M',
  },

  {
    id: '003',
    basePrice: 3100,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'dest1',
    isFavorite: false,
    offers: [''],
    type: getRandomArrayElement(EVENT_TYPE),

    duration: '30M',
  },
];

const mockOffers = [
  {
    type: 'Train',
    offers: [
      {
        id: 'offer1',
        title: 'Add luggage',
        price: 30,
      },
    ],
  },
  {
    type: 'Bus',
    offers: [
      {
        id: 'offer2',
        title: 'Switch to comfort class',
        price: 100,
      },
    ],
  },
  {
    type: 'Taxi',
    offers: [
      {
        id: 'offer3',
        title: 'Upgrade to a business class',
        price: 320,
      },
    ],
  },
  {
    type: 'Ship',
    offers: [
      {
        id: 'offer3',
        title: 'Add meal',
        price: 15,
      },
    ],
  },
  {
    type: 'Drive',
    offers: [
      {
        id: 'offer3',
        title: 'Choose seats',
        price: 5,
      },
    ],
  },
  {
    type: 'Flight',
    offers: [
      {
        id: 'offer3',
        title: 'Travel by train',
        price: 40,
      },
    ],
  },
  {
    type: 'Check-in',
    offers: [
      {
        id: 'offer3',
        title: 'Upgrade to a business class',
        price: 320,
      },
    ],
  },
  {
    type: 'Restaurant',
    offers: [
      {
        id: 'offer3',
        title: 'Upgrade to a business class',
        price: 320,
      },
    ],
  },
  {
    type: 'Sightseeing',
    offers: [
      {
        id: 'offer3',
        title: 'Upgrade to a business class',
        price: 320,
      },
    ],
  },
];


const getRandomPointTrip = () => getRandomArrayElement(mockPointTrip);
const mockOfferss = [...mockOffers];


export {getRandomPointTrip, mockOfferss};


