import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {
contacto = '';


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.contacto = this.navParams.get('contacto');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

}
