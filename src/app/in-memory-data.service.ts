import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
const saviors = [
    {id: 1, name: 'Batman'},
    {id: 2, name: 'Superman'},
    {id: 3, name: 'Green Lantern'},
    {id: 4, name: 'Flash'},
    {id: 5, name: 'Wonder Woman'},
    {id: 6, name: 'Martian Manhunter'},
    {id: 7, name: 'Hawk Girl'},
    {id: 8, name: 'Green Arrow'},
    {id: 9, name: 'Black Canary'},
    {id: 10, name: 'Zatanna'},
];
return {saviors};
  }
}