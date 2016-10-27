import {inject, bindable} from 'aurelia-framework'

@inject(Element)
export class Player {
    @bindable tracks;

    constructor(element) {
        this.element = element;
        this.currentTime = 0;
        this.currentTrack = null;
        this.state = 'paused';
    }
    play(track) {
        this.currentTrack = track;
        this.audio.src = track.uri;
        this.audio.play();
    }
    attached() {
        this.audio = document.getElementById("audio-player");
        this.audio.onplay = function () {
            if (!this.currentTrack)
                this.currentTrack = this.tracks[0];
            this.state = 'playing';
        }.bind(this);
        this.audio.onplaying = function () {
            this.state = 'playing';
        }
        this.audio.oncanplay = function () {
            this.state = 'playing';
        }
        this.audio.onseeked = function () {
            this.state = 'seeking';
        }.bind(this);
        this.audio.onpause = function () {
            this.state = 'paused';
        }.bind(this);
        // this.audio.onwaiting = function () {
        //     this.state = 'waiting';
        // }.bind(this);
    }
}

export class FilterValueConverter {
    toView(array, filter) {
        var result = array.filter(track => {
            if (!filter)
                return true;
            else
                return track.title.toLowerCase().indexOf(filter.toLowerCase()) > -1;
        });

        for (var i = 0; i < result.length; i++)
            result[i].no = i + 1;

        return result;
    }
}