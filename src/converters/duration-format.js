import moment from 'moment';
require("moment-duration-format");

export class DurationFormatValueConverter {
  toView(value, format) {
      console.log(12)
    return moment.duration(value, "seconds").format("hh:mm:ss"); 
  }
}