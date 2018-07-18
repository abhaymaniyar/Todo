import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { title: 'Mr. Nice' , completed: false, details: ""},
      { title: 'Narco' , completed: true, details: ""},
      { title: 'Bombasto' , completed: true, details: ""},
      { title: 'Celeritas' , completed: true, details: ""},
      { title: 'Magneta' , completed: false, details: ""},
      { title: 'RubberMan' , completed: false, details: ""},
      { title: 'Dynama' , completed: false, details: ""},
      { title: 'Dr IQ' , completed: false, details: ""},
      { title: 'Magma' , completed: false, details: ""},
      { title: 'Tornado', completed: false , details: ""}
    ];
    return {items};
  }
}