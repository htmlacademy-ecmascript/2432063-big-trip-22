import { getRandomArrayElement } from '../utils';
import { EVENT_TYPE } from '../const';

const CITIES = ['Amsterdam', 'Chamonix', 'Geneva', 'Sofia'];

const LOREMS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
];

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

  },

  {
    id: '002',
    basePrice: 2100,
    dateFrom: '2019-07-12T22:55:56.845Z',
    dateTo: '2019-07-13T11:22:13.375Z',
    destination: 'dest2',
    isFavorite: true,
    offers: ['offer3'],
    type: getRandomArrayElement(EVENT_TYPE),

  },

  {
    id: '003',
    basePrice: 3100,
    dateFrom: '2019-07-14T22:55:56.845Z',
    dateTo: '2019-07-18T11:22:13.375Z',
    destination: 'dest3',
    isFavorite: false,
    offers: [''],
    type: getRandomArrayElement(EVENT_TYPE),

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

const mockDestinations = [
  {
    id: 'dest1',
    description: getRandomArrayElement(LOREMS),
    name: getRandomArrayElement(CITIES),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.random()}`,
        description: 'Chamonix parliament building',
      },
    ],
  },
  {
    id: 'dest2',
    description: getRandomArrayElement(LOREMS),
    name: getRandomArrayElement(CITIES),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.random()}`,
        description: 'Chamonix parliament building',
      },
    ],
  },
  {
    id: 'dest3',
    description: getRandomArrayElement(LOREMS),
    name: getRandomArrayElement(CITIES),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.random()}`,
        description: 'Chamonix parliament building',
      },
    ],
  },
];


const getRandomPointTrip = () => getRandomArrayElement(mockPointTrip);

const mockOfferss = [...mockOffers];
const loadDestinations = [...mockDestinations];

export {getRandomPointTrip, mockOfferss, loadDestinations};


