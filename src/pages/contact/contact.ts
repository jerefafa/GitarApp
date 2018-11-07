import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MinorPage } from '../minor/minor';
import { MajorPage } from '../major/major';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  openMinorChords(): void {
    this.navCtrl.push(MinorPage);
  }

  openMajorChords(): void {
    this.navCtrl.push(MajorPage);
  }

}
