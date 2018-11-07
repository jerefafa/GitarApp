import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

/**
 * Generated class for the MajorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-major',
  templateUrl: 'major.html',
})
export class MajorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeAudio: NativeAudio) {
  }

  ionViewDidLoad() {
    this.nativeAudio.preloadComplex('a_major','assets/music/a_major.mp3',1,1,0);
    this.nativeAudio.preloadComplex('b_major','assets/music/b_major.mp3',1,1,0);
    this.nativeAudio.preloadComplex('c_major','assets/music/c_major.mp3',1,1,0);
    this.nativeAudio.preloadComplex('d_major','assets/music/d_major.mp3',1,1,0);
    this.nativeAudio.preloadComplex('e_major','assets/music/e_major.mp3',1,1,0);
    this.nativeAudio.preloadComplex('f_major','assets/music/f_major.mp3',1,1,0);
    this.nativeAudio.preloadComplex('g_major','assets/music/g_major.mp3',1,1,0);
  }

  click(chord: string): void {
    this.nativeAudio.play(chord).then(()=>console.log('zxc'));
  }

}
