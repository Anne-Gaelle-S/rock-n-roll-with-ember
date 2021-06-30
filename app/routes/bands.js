import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Band from 'rarwe/models/band';
import fetch from 'fetch';

export default class BandsRoute extends Route {
  @service catalog;

  async model() {
    let response = await fetch('/bands');
    let json = await response.json();
    for (let item of json.data) {
      let { id, attributes } = item;
      let record = new Band({ id, ...attributes });
      this.catalog.add('band', record);
    }
    return this.catalog.bands;
  }
}
