import {inject} from 'aurelia-framework';
import {Player} from './player';

@inject(Element)
export class Index {
    artists = [{ label: 'All', value: '*' }, { label: 'Ps.Jeffrey', value: 'Jeffrey Rachmat' }, { label: 'Ps. Jose', value: 'Jose Carol' }, { label: 'Other', value: '!' }]
    tracks = [];
    filteredTracks = [];

    constructor(element) {
        this.element = element;
        this.artist = '*';
    }

    attached() {
        // this.initPlayer(); 
        this.loadTracks();
        this.setArtist(this.artist);
    }

    loadTracks() {

        this.addSermon('Jeffrey Rachmat', 'Abba Bapa',                              '42:38',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Abba%20Bapa.mp3');
        this.addSermon('Jeffrey Rachmat', 'Access',                                 '36:28',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Access.mp3');
        this.addSermon('Jeffrey Rachmat', 'Art Of Serving',                         '43:46',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Art%20Of%20Serving.mp3');
        this.addSermon('Jeffrey Rachmat', 'Attitude 01',                            '39:16',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Attitude%2001.mp3');
        this.addSermon('Jeffrey Rachmat', 'Attitude 02',                            '47:18',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Attitude%2002.mp3');
        this.addSermon('Jeffrey Rachmat', 'Baik Vs Benar',                          '37:12',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Baik%20Vs%20Benar.mp3');
        this.addSermon('Jeffrey Rachmat', 'Berubah',                                '43:46',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Berubah.mp3');
        this.addSermon('Jeffrey Rachmat', 'Better Marriage 01',                     '1:12:48',  'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Better%20Marriage%2001.mp3');
        this.addSermon('Jeffrey Rachmat', 'Better Marriage 02',                     '49:54',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Better%20Marriage%2002.mp3');
        this.addSermon('Jeffrey Rachmat', 'Christianity Is About Life 01',          '40:12',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Christianity%20Is%20About%20Life%2001.mp3');
        this.addSermon('Jeffrey Rachmat', 'Christianity Is About Life 02',          '41:03',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Christianity%20Is%20About%20Life%2002.mp3');
        this.addSermon('Jeffrey Rachmat', 'Closer 01',                              '1:02:21',  'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Closer%2001.mp3');
        this.addSermon('Jeffrey Rachmat', 'Closer 02',                              '20:10',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Closer%2002.mp3');
        this.addSermon('Jeffrey Rachmat', 'Commit To Life 01',                      '52:53',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Commit%20To%20Life%2001.mp3');
        this.addSermon('Jeffrey Rachmat', 'Commit To Life 02',                      '46:40',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Commit%20To%20Life%2002.mp3');
        this.addSermon('Jeffrey Rachmat', 'Crazy Love',                             '39:25',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Crazy%20Love.mp3');
        this.addSermon('Jeffrey Rachmat', 'Cuek',                                   '58:09',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Cuek.mp3');
        this.addSermon('Jeffrey Rachmat', 'Dating 101',                             '1:18:01',  'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Dating%20101.mp3');
        this.addSermon('Jeffrey Rachmat', 'Family Ties 01',                         '47:15',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Family%20Ties%2001.mp3');
        this.addSermon('Jeffrey Rachmat', 'Family Ties 02',                         '39:23',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Family%20Ties%2002.mp3');
        this.addSermon('Jeffrey Rachmat', 'Family Ties 03',                         '46:49',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Family%20Ties%2003.mp3');
        this.addSermon('Jeffrey Rachmat', 'Garam Dunia 01',                         '47:30',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Garam%20Dunia%2001.mp3');
        this.addSermon('Jeffrey Rachmat', 'Garam Dunia 02',                         '39:49',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Garam%20Dunia%2002.mp3');
        this.addSermon('Jeffrey Rachmat', "God's Zone",                             '36:41',    "https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20God's% 20Zone.mp3");
        this.addSermon('Jeffrey Rachmat', 'Grace And Truth',                        '35:30',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Grace%20And%20Truth.mp3');
        this.addSermon('Jeffrey Rachmat', 'Inside Out',                             '53:02',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Inside%20Out.mp3');
        this.addSermon('Jeffrey Rachmat', 'Langit Di Atas Bumi',                    '44:52',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Langit%20Di%20Atas%20Bumi.mp3');
        this.addSermon('Jeffrey Rachmat', 'Less Is More',                           '37:09',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Less%20Is%20More.mp3');
        this.addSermon('Jeffrey Rachmat', 'Marriage Seminar 01',                    '1:12:36',  'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Marriage%20Seminar%2001.mp3');
        this.addSermon('Jeffrey Rachmat', 'Marriage Seminar 02',                    '41:54',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Marriage%20Seminar%2002.mp3');
        this.addSermon('Jeffrey Rachmat', 'Peduli',                                 '29:24',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Peduli.mp3');
        this.addSermon('Jeffrey Rachmat', 'Pelayan Dari Semua',                     '40:35',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Pelayan%20Dari%20Semua.mp3');
        this.addSermon('Jeffrey Rachmat', 'R-Rated',                                '52:12',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20R-Rated.mp3');
        this.addSermon('Jeffrey Rachmat', 'Salah Nilai = Rugi',                     '54:33',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Salah%20Nilai%20=%20Rugi.mp3');
        this.addSermon('Jeffrey Rachmat', 'Single Forever',                         '42:22',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Single%20Forever.mp3');
        this.addSermon('Jeffrey Rachmat', 'Tangan Dan Hati',                        '45:41',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Tangan%20Dan%20Hati.mp3');
        this.addSermon('Jeffrey Rachmat', 'Tenaga Dalam',                           '44:47',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Tenaga%20Dalam.mp3');
        this.addSermon('Jeffrey Rachmat', 'Terang Dunia',                           '36:33',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Terang%20Dunia.mp3');
        this.addSermon('Jeffrey Rachmat', 'Terhimpit',                              '42:00',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Terhimpit.mp3');
        this.addSermon('Jeffrey Rachmat', 'Terlalu Percaya',                        '43:32',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Terlalu%20Percaya.mp3');
        this.addSermon('Jeffrey Rachmat', 'The Power To Serve',                     '43:18',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20The%20Power%20To%20Serve.mp3');
        this.addSermon('Jeffrey Rachmat', 'Too Fast Too Furious',                   '57:45',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jeffrey%20rachmat/Jeffrey%20Rachmat%20-%20Too%20Fast%20Too%20Furious.mp3');

        this.addSermon('Jose Carol', 'A Heart Surrender',                           '42:35',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20A%20Heart%20Surrender.mp3');
        this.addSermon('Jose Carol', 'Aku Bukan Meja',                              '42:58',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Aku%20Bukan%20Meja.mp3');
        this.addSermon('Jose Carol', 'Anticipation',                                '46:15',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Anticipation.mp3');
        this.addSermon('Jose Carol', 'Bring It On #1',                              '47:20',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Bring%20It%20On%20%231.mp3');
        this.addSermon('Jose Carol', 'Bring It On #2',                              '40:05',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Bring%20It%20On%20%232.mp3');
        this.addSermon('Jose Carol', 'Commitment',                                  '37:41',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Commitment.mp3');
        this.addSermon('Jose Carol', 'Critical Moments #1',                         '41:38',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Critical%20Moments%20%231.mp3');
        this.addSermon('Jose Carol', 'Critical Moments #2',                         '45:08',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Critical%20Moments%20%232.mp3');
        this.addSermon('Jose Carol', 'Daily #1',                                    '43:08',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Daily%20%231.mp3');
        this.addSermon('Jose Carol', 'Daily #2',                                    '28:28',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Daily%20%232.mp3');
        this.addSermon('Jose Carol', 'Distinction of a True Friend #1',             '46:11',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Distinction%20of%20a%20True%20Friend%20%231.mp3');
        this.addSermon('Jose Carol', 'Distinction of a True Friend #2',             '36:19',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Distinction%20of%20a%20True%20Friend%20%232.mp3');
        this.addSermon('Jose Carol', 'Double Standard #1',                          '40:25',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Double%20Standard%20%231.mp3');
        this.addSermon('Jose Carol', 'Double Standard #2',                          '42:32',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Double%20Standard%20%232.mp3');
        this.addSermon('Jose Carol', 'Enthusiasm',                                  '42:41',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Enthusiasm.mp3');
        this.addSermon('Jose Carol', 'First',                                       '51:45',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20First.mp3');
        this.addSermon('Jose Carol', 'For Love Or For Lust',                        '47:34',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20For%20Love%20Or%20For%20Lust.mp3');
        this.addSermon('Jose Carol', 'God Of Excellence',                           '41:33',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20God%20Of%20Excellence.mp3');
        this.addSermon('Jose Carol', 'Heart Check Up',                              '53:19',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Heart%20Check%20Up.mp3');
        this.addSermon('Jose Carol', 'Heart Checkup',                               '51:53',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Heart%20Checkup.mp3');
        this.addSermon('Jose Carol', 'Heat, Pressure & Moisture',                   '48:05',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Heat,%20Pressure%20&%20Moisture.mp3');
        this.addSermon('Jose Carol', 'Honesty, Is It The Best Policy',              '52:06',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Honesty,%20Is%20It%20The%20Best%20Policy.mp3');
        this.addSermon('Jose Carol', "It's Not Over",                               '32:43',    "https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20It's% 20Not% 20Over.mp3");
        this.addSermon('Jose Carol', 'Jual Mahal',                                  '50:10',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Jual%20Mahal.mp3');
        this.addSermon('Jose Carol', 'Kesetiaan',                                   '45:45',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Kesetiaan.mp3');
        this.addSermon('Jose Carol', 'Lesson From The Samaritan',                   '46:53',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Lesson%20From%20The%20Samaritan.mp3');
        this.addSermon('Jose Carol', 'May All Your Wishes Come True',               '35:23',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20May%20All%20Your%20Wishes%20Come%20True.mp3');
        this.addSermon('Jose Carol', 'Mengalah Tidak Sama Dengan Mengaku Kalah',    '43:14',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Mengalah%20Tidak%20Sama%20Dengan%20Mengaku%20Kalah.mp3');
        this.addSermon('Jose Carol', 'Money, Time And Talent',                      '53:51',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Money,%20Time%20And%20Talent.mp3');
        this.addSermon('Jose Carol', 'Narcist',                                     '56:13',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Narcist.mp3');
        this.addSermon('Jose Carol', 'Potential',                                   '41:03',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Potential.mp3');
        this.addSermon('Jose Carol', 'Power And Influence Index #1',                '41:58',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Power%20And%20Influence%20Index%20%231.mp3');
        this.addSermon('Jose Carol', 'Power And Influence Index #2',                '49:50',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Power%20And%20Influence%20Index%20%232.mp3');
        this.addSermon('Jose Carol', 'Prosperous #1',                               '50:29',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Prosperous%20%231.mp3');
        this.addSermon('Jose Carol', 'Prosperous #2',                               '44:57',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Prosperous%20%232.mp3');
        this.addSermon('Jose Carol', 'Reality Bites',                               '51:17',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Reality%20Bites.mp3');
        this.addSermon('Jose Carol', 'Relate, Connect For Unite',                   '42:06',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Relate,%20Connect%20For%20Unite.mp3');
        this.addSermon('Jose Carol', 'Relationship Matters',                        '48:42',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Relationship%20Matters.mp3');
        this.addSermon('Jose Carol', 'Reset',                                       '40:32',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Reset.mp3');
        this.addSermon('Jose Carol', 'Self Control #1',                             '45:41',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Self%20Control%20%231.mp3');
        this.addSermon('Jose Carol', 'Self Control #2',                             '43:30',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Self%20Control%20%232.mp3');
        this.addSermon('Jose Carol', 'Semak Berduri #1',                            '41:31',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Semak%20Berduri%20%231.mp3');
        this.addSermon('Jose Carol', 'Semak Berduri #2',                            '49:36',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Semak%20Berduri%20%232.mp3');
        this.addSermon('Jose Carol', 'Semak Duri #1',                               '10:16',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Semak%20Duri%20%231.mp3');
        this.addSermon('Jose Carol', 'Semak Duri #2',                               '49:36',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Semak%20Duri%20%232.mp3');
        this.addSermon('Jose Carol', 'The God I Know',                              '34:47',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20The%20God%20I%20Know.mp3');
        this.addSermon('Jose Carol', 'The Love Of Money',                           '51:53',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20The%20Love%20Of%20Money.mp3');
        this.addSermon('Jose Carol', 'The Package Of Forgiveness',                  '36:29',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20The%20Package%20Of%20Forgiveness.mp3');
        this.addSermon('Jose Carol', 'The Sensation',                               '39:00',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20The%20Sensation.mp3');
        this.addSermon('Jose Carol', 'The Source And Place Of Hope',                '41:46',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20The%20Source%20And%20Place%20Of%20Hope.mp3');
        this.addSermon('Jose Carol', 'Visi Tanpa Batas',                            '22:38',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Visi%20Tanpa%20Batas.mp3');
        this.addSermon('Jose Carol', 'When I Close My Eyes',                        '29:25',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20When%20I%20Close%20My%20Eyes.mp3');
        this.addSermon('Jose Carol', 'When You Stop Growing #1',                    '42:44',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20When%20You%20Stop%20Growing%20%231.mp3');
        this.addSermon('Jose Carol', 'When You Stop Growing #2',                    '07:19',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20When%20You%20Stop%20Growing%20%232.mp3');
        this.addSermon('Jose Carol', 'Who Is In Control #1',                        '20:43',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Who%20Is%20In%20Control%20%231.mp3');
        this.addSermon('Jose Carol', 'Who Is In Control #2',                        '1:00:47',  'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Who%20Is%20In%20Control%20%232.mp3');
        this.addSermon('Jose Carol', 'Who Is In Control #3',                        '41:31',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Who%20Is%20In%20Control%20%233.mp3');
        this.addSermon('Jose Carol', 'Why This Family #1',                          '51:25',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Why%20This%20Family%20%231.mp3');
        this.addSermon('Jose Carol', 'Why This Family #2',                          '41:38',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Why%20This%20Family%20%232.mp3');
        this.addSermon('Jose Carol', 'Why This Family #3',                          '44:11',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Why%20This%20Family%20%233.mp3');
        this.addSermon('Jose Carol', 'Why This Family #4',                          '37:34',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Why%20This%20Family%20%234.mp3');
        this.addSermon('Jose Carol', 'Within Your Reach',                           '54:41',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Within%20Your%20Reach.mp3');
        this.addSermon('Jose Carol', 'Worship Experience',                          '38:27',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/jose%20carol/Jose%20Carol%20-%20Worship%20Experience.mp3');

        this.addSermon('Jonny Herjawan', 'Being Honest Is Not Good Enough',         '50:36',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/other/Jonny%20Herjawan%20-%20Being%20Honest%20Is%20Not%20Good%20Enough.mp3');
        this.addSermon('Jonny Herjawan', 'Bikin Hidup Lebih Hidup',                 '33:53',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/other/Jonny%20Herjawan%20-%20Bikin%20Hidup%20Lebih%20Hidup.mp3');
        this.addSermon('Jonny Herjawan', 'Cara Cepat Menjadi Miskin',               '59:51',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/other/Jonny%20Herjawan%20-%20Cara%20Cepat%20Menjadi%20Miskin.mp3');
        this.addSermon('Jonny Herjawan', 'Increasing Your Power And Influence',     '47:37',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/other/Jonny%20Herjawan%20-%20Increasing%20Your%20Power%20And%20Influence.mp3');
        this.addSermon('Jonny Herjawan', 'Multifield And Multiplication',           '52:18',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/other/Jonny%20Herjawan%20-%20Multifield%20And%20Multiplication.mp3');
        this.addSermon('Jonny Herjawan', 'No Shortcut',                             '44:03',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/other/Jonny%20Herjawan%20-%20No%20Shortcut.mp3');
        this.addSermon('Jonny Herjawan', 'Out Of This World',                       '57:47',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/other/Jonny%20Herjawan%20-%20Out%20Of%20This%20World.mp3');
        this.addSermon('Jonny Herjawan', 'Understanding Your Face Value',           '47:11',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/other/Jonny%20Herjawan%20-%20Understanding%20Your%20Face%20Value.mp3');
        this.addSermon('Jonny Herjawan', 'Vision And Gratitude',                    '48:54',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/other/Jonny%20Herjawan%20-%20Vision%20And%20Gratitude.mp3');
        this.addSermon('Sydney Mohede', 'How Can I Be Of Service',                  '49:52',    'https://console.cloud.google.com/m/cloudstorage/b/www.jpcc.space/o/sermons/other/Sydney%20Mohede%20-%20%20How%20Can%20I%20Be%20Of%20Service.mp3');
    }
    addSermon(speaker, title, length, uri) {
        this.tracks.push({ artist: speaker, title: title, length: length, uri: uri });
    }
    setArtist(artist) {
        this.artist = artist;
        var other = '';
        if (this.artist == '!') {
            var otherArtist = this.artists.filter(a => a.value != '*' && a.value != '!');
            other = otherArtist.map((item, index, array) => { return item.value.toLowerCase() }).join('-');
        }
        this.filteredTracks = this.tracks.filter(track => {
            if (this.artist == '*')
                return true;
            else if (this.artist == '!') {
                return other.toLowerCase().indexOf(track.artist.toLowerCase()) < 0;
            }
            else
                return track.artist.toLowerCase().indexOf(artist.toLowerCase()) > -1;
        })
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






















































































































