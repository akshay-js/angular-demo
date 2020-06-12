import * as angularInMemoryWebApi from 'angular-in-memory-web-api';
import { Spectrum, User } from './model';

export class DataService implements angularInMemoryWebApi.InMemoryDbService {
  createDb() {
    const spectrums: Spectrum[] = [
      {
        id: 1,
        title: 'first',
        band: 1,
        interference_threshould: 'interference_threshould',
        emission_mask: 'emission_mask',
        start_frequency: 'start_frequency',
        stop_frequency: 'stop_frequency',
        capacity: '££/MHZ/PER PERSON'
      },
      {
        id: 2,
        title: 'Second',
        band: 1,
        interference_threshould: 'interference_threshould',
        emission_mask: 'emission_mask',
        start_frequency: 'start_frequency',
        stop_frequency: 'stop_frequency',
        capacity: '££/MHZ/PER PERSON'
      },
      {
        id: 3,
        title: 'third',
        band: 1,
        interference_threshould: 'interference_threshould',
        emission_mask: 'emission_mask',
        start_frequency: 'start_frequency',
        stop_frequency: 'stop_frequency',
        capacity: '££/MHZ/PER PERSON'
      },
      {
        id: 4,
        title: 'fourth',
        band: 1,
        interference_threshould: 'interference_threshould',
        emission_mask: 'emission_mask',
        start_frequency: 'start_frequency',
        stop_frequency: 'stop_frequency',
        capacity: '££/MHZ/PER PERSON'
      }
    ];

    const users: User[] = [
      {
        id: 1,
        full_name: 'John doe',
        email: 'test@gmail.com',
        password: '123456'
      }
    ];
    return { spectrums, users };
  }
}
