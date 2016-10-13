import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Batman',            description: ''},
      {id: 12, name: 'Arqueiro Verde',    description: ''},
      {id: 13, name: 'Wildcat',           description: ''},
      {id: 14, name: 'Questão',           description: ''},
      {id: 15, name: 'Gladiador Dourado', description: ''},
      {id: 16, name: 'Asa Noturna',       description: ''},
      {id: 17, name: 'Batgirl',           description: ''},
      {id: 18, name: 'Arsenal',           description: ''},
      {id: 19, name: 'Caçadora',          description: ''},
      {id: 20, name: 'Karate Kid',        description: ''}
    ];
    return {heroes};
  }
}
