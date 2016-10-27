export class App {
  configureRouter(config, router) {
    config.title = 'setia.one';
    config.map([
      { route: ['', 'player'], name: 'sermon-player',  moduleId: './module/sermon-player/index', nav: true,  title: 'Sermons' },
      { route: 'sermons',      name: 'sermons',        moduleId: './module/sermon/index',        nav: false, title: 'Sermons' }
    ]);

    this.router = router;
  }
}
