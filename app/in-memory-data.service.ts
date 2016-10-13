import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Batman'},
      {id: 12, name: 'Arqueiro Verde'},
      {id: 13, name: 'Wildcat'},
      {id: 14, name: 'Questão'},
      {id: 15, name: 'Gladiador Dourado'},
      {id: 16, name: 'Asa Noturna'},
      {id: 17, name: 'Batgirl'},
      {id: 18, name: 'Arsenal'},
      {id: 19, name: 'Caçadora'},
      {id: 20, name: 'Karate Kid'}
    ];
    return {heroes};
  }
}
