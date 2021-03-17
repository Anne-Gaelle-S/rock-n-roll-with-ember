import Route from '@ember/routing/route';

export default class BandsRoute extends Route {
  model() {
    return [
      { name: 'Led Zeppelin' },
      { name: 'Pearl Jam' },
      { name: 'Foo Fighters' },
    ];
  }
}
