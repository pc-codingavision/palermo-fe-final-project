import { Category } from '../../enum/category'
import { Status } from '../../enum/status'
import { Toilet } from '../../enum/toilet'
import { Property } from '../property'

export const PROPERTIES: Property[] = [
  {
    id: 1,
    landlordId: 1,
    address: {
      line1: 'Via Roma',
      city: 'Palermo',
      country: 'italia',
      postalCode: '90100',
    },
    title: 'Splendido monovano',
    category: Category.Apartment,
    rooms: [{ roomName: 'room 1', beds: 1, toilet: Toilet.Inside, mq: 25 }],
    numberOfToilet: 1,
    description:
      "Non si intrometta! No, aspetti, mi porga l'indice; ecco lo alzi così... guardi, guardi, guardi; lo vede il dito? Lo vede che stuzzica, che prematura anche. E lei.. cosa si sente? Professore, non le dico. Antani come trazione per due anche se fosse supercazzola bitumata, ha lo scappellamento a destra.",
    facilities: {
      tv: true,
      wifi: true,
      breakfastIncluded: false,
      parking: false,
      kitchen: false,
      shower: true,
      bath: false,
    },
    imagesPath: ['https://cf.bstatic.com/images/hotel/max1024x768/228/228549673.jpg'],
    status: Status.Open,
  },
  {
    id: 2,
    landlordId: 2,
    address: {
      line1: 'Via Roma',
      city: 'Palermo',
      country: 'italia',
      postalCode: '90100',
    },
    title: 'Splendido appartamento',
    category: Category.Apartment,
    rooms: [
      { roomName: 'room 1', beds: 1, toilet: Toilet.Inside, mq: 25 },
      { roomName: 'room 2', beds: 2, toilet: Toilet.Outside, mq: 25 },
      { roomName: 'room 3', beds: 1, toilet: Toilet.Outside, mq: 25 },
    ],
    numberOfToilet: 1,
    description:
      'Si, ma la sbiriguda della sbrindellona come se fosse antani come faceva? Prego? Ho provato con la supercazzola con scappelamento paraplegico a sinistra, ma non funzionava. E lei.. cosa si sente? Professore, non le dico.',
    facilities: {
      tv: true,
      wifi: true,
      breakfastIncluded: true,
      parking: false,
      kitchen: true,
      shower: true,
      bath: false,
    },
    imagesPath: ['https://cf.bstatic.com/images/hotel/max1024x768/228/228549673.jpg'],
    status: Status.Open,
  },
  {
    id: 3,
    landlordId: 2,
    address: {
      line1: 'Via Roma',
      city: 'Palermo',
      country: 'italia',
      postalCode: '90100',
    },
    title: 'Splendido attico con vista',
    category: Category.Apartment,
    rooms: [
      { roomName: 'room 1', beds: 1, toilet: Toilet.Outside, mq: 25 },
      { roomName: 'room 2', beds: 2, toilet: Toilet.Outside, mq: 25 },
    ],
    numberOfToilet: 1,
    description:
      "Antani come trazione per due anche se fosse supercazzola bitumata, ha lo scappellamento a destra. Guardi, le ho ritagliato quell'articolo sul Casentino. Ma lei se la blinda la supercazzola prematurata come se fosse anche un po' di Casentino che perdura anche come cappotto;",
    facilities: {
      tv: true,
      wifi: true,
      breakfastIncluded: true,
      parking: true,
      kitchen: true,
      shower: true,
      bath: true,
    },
    imagesPath: [
      'https://www.grossoandpartners.com/docs/immobili/1925/foto/A126-Attici-Mansarde-Treviso-Treviso-77491.jpeg',
    ],
    status: Status.Open,
  },
]
