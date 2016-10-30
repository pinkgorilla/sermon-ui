import { inject, bindable, bindingMode } from 'aurelia-framework';
import { Player } from './player';
import { Service } from './service';

@inject(Element, Service)
export class Index {
    queryInfo = { filter: { duration: 60 } };
    artists = [{ label: 'All', value: null }, { label: 'Ps.Jeffrey', value: 'Jeffrey Rachmat' }, { label: 'Ps. Jose', value: 'Jose Carol' }, { label: 'Other', value: { '$regex': "^(?!.*(Jeffrey Rachmat|Jose Carol)).*$" } }]

    @bindable({ defaultBindingMode: bindingMode.twoWay }) duration;
    tracks = [];
    filteredTracks = [];
    sliderOptions = { min: 0, max: 10000, step: 60 };

    constructor(element, service) {
        this.element = element;
        this.service = service;

        this.artist = '*';
        this.duration = 60;
    }

    attached() {
        this.loadTracks();
    }

    loadTracks() {
        var keyword = this.queryInfo.keyword;
        var filter = this.queryInfo.filter;
        this.service.search(this.queryInfo)
            .then(result => {
                this.tracks = result.data;
                this.queryInfo = result.info;
                this.queryInfo.keyword = keyword;
                this.queryInfo.filter = filter;
            })
    }
    changePage(e) {
        var page = e.detail;
        this.queryInfo.page = page;
        this.loadTracks();
    }

    setArtist(artist) {
        this.queryInfo.filter = this.queryInfo.filter || {};
        if (artist)
            this.queryInfo.filter.artist = artist;
        else
            delete this.queryInfo.filter.artist;
    }

    durationChanged(newValue) {
        this.setDuration();
    }
    setDuration() {
        this.queryInfo.filter = this.queryInfo.filter || {};
        this.queryInfo.filter.duration = { '$lte': this.duration * 60 };
    }
}

export class ArtistValueConverter {
    toView(array, artist) {
        var result = array.filter(track => {
            return track.artist.toLowerCase().indexOf(artist.toLowerCase()) > -1;
        });

        for (var i = 0; i < result.length; i++)
            result[i].no = i + 1;
        return result;
    }
}






















































































































