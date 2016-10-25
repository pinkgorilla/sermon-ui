export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'sermons'], name: 'sermon-player',  moduleId: './module/sermon-player/index', nav: true,  title: 'Sermon Player' },
      { route: 'sermons',       name: 'sermons',        moduleId: './module/sermon/index',        nav: false, title: 'Sermons' }
    ]);

    this.router = router;
  }
}
