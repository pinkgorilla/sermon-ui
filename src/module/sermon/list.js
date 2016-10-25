import { inject } from 'aurelia-framework';
import { Service } from "./service";
import { Router } from 'aurelia-router';

@inject(Router, Service)
export class List {
    data = [];
    info = {};

    constructor(router, service) {
        this.service = service;
        this.router = router;
    }

    activate() {
        this.load();
    }


    load() {
        var keyword = this.info.keyword;
        this.service.search(this.info)
            .then(result => {
                this.data = result.data;
                this.info = result.info;
                this.info.keyword = keyword;
            });
    }
    loadPage(e) {
        var page = e.detail;
        this.info.page = page;
        this.load();
    }
    reset() {
        this.info.keyword = null;
        this.load();
    }
    view(data) {
        this.router.navigateToRoute('view', { id: data._id });
    }

    create() {
        this.router.navigateToRoute('create');
    }


}