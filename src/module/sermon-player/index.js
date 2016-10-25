import { inject } from 'aurelia-framework';
import { Player } from './player';
import { Service } from './service';

@inject(Element, Service)
export class Index {
    queryInfo = {};
    artists = [{ label: 'All', value: '*' }, { label: 'Ps.Jeffrey', value: 'Jeffrey Rachmat' }, { label: 'Ps. Jose', value: 'Jose Carol' }, { label: 'Other', value: '!' }]
    tracks = [];
    filteredTracks = [];

    constructor(element, service) {
        this.element = element;
        this.service = service;
        this.artist = '*';
    }

    attached() {
        // this.initPlayer(); 
        this.loadTracks();
        this.setArtist(this.artist);
    }

    loadTracks() {
        this.service.search(this.queryInfo)
            .then(result => {
                this.tracks = result.data;
            })
    } 

    setArtist(artist) {
        // this.artist = artist;
        // var other = '';
        // if (this.artist == '!') {
        //     var otherArtist = this.artists.filter(a => a.value != '*' && a.value != '!');
        //     other = otherArtist.map((item, index, array) => { return item.value.toLowerCase() }).join('-');
        // }
        // this.filteredTracks = this.tracks.filter(track => {
        //     if (this.artist == '*')
        //         return true;
        //     else if (this.artist == '!') {
        //         return other.toLowerCase().indexOf(track.artist.toLowerCase()) < 0;
        //     }
        //     else
        //         return track.artist.toLowerCase().indexOf(artist.toLowerCase()) > -1;
        // })
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






















































































































