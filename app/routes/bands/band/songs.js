import Route from '@ember/routing/route';

export default class BandsBandSongsRoute extends Route {
  resetController() {
    this.controller.title = '';
    this.controller.showAddSong = true;
  }
}
