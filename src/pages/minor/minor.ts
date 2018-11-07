import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

/**
 * Generated class for the MinorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minor',
  templateUrl: 'minor.html',
})
export class MinorPage {

  audioType: string = "html5";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeAudio: NativeAudio,
              private alerCtrl: AlertController) {}


  ionViewDidLoad() {
    this.nativeAudio.preloadComplex('a_minor','assets/music/a_minor.mp3',1,1,0);
    this.nativeAudio.preloadComplex('b_minor','assets/music/b_minor.mp3',1,1,0);
    this.nativeAudio.preloadComplex('c_minor','assets/music/c_minor.mp3',1,1,0);
    this.nativeAudio.preloadComplex('d_minor','assets/music/d_minor.mp3',1,1,0);
    this.nativeAudio.preloadComplex('e_minor','assets/music/e_minor.mp3',1,1,0);
    this.nativeAudio.preloadComplex('f_minor','assets/music/f_minor.mp3',1,1,0);
    this.nativeAudio.preloadComplex('g_minor','assets/music/g_minor.mp3',1,1,0);
  }

  click(chord: string): void {
    console.log(chord);
   this.nativeAudio.play(chord).then(()=>console.log('zxc')).catch(err=>{
     this.alerCtrl.create({
       title:'error',
       subTitle: err,
       buttons: ['ok']
     }).present();
   });
  }

}
