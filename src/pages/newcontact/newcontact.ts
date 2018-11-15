import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the NewcontactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newcontact',
  templateUrl: 'newcontact.html',
})
export class NewcontactPage {
nombre = '';
telefono = '';
email = '';
fb = '';
twt = '';
ig = '';
imagen = '';
sexo = '';
nuevo = NewcontactPage;
contactos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl:AlertController) {
  this.contactos = this.navParams.get('contactos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewcontactPage');
  }

  agregarContacto() {
    if(this.nombre.length > 0 && this.telefono.length > 0) {
      if (this.sexo == 'F') {
      this.contactos.push({nombre: this.nombre, telefono: this.telefono, email:this.email, fb: this.fb, twt: this.twt, ig: this.ig, imagen: '../assets/wmn.png'});
      this.navCtrl.pop();
    } else if (this.sexo == 'M') {
      this.contactos.push({nombre: this.nombre, telefono: this.telefono, email:this.email, fb: this.fb, twt: this.twt, ig: this.ig, imagen: '../assets/man.png'});
      this.navCtrl.pop();
    } else {
      this.contactos.push({nombre: this.nombre, telefono: this.telefono, email:this.email, fb: this.fb, twt: this.twt, ig: this.ig, imagen: '../assets/user.png'});
      this.navCtrl.pop();
    } 
    } else {
      const alert = this.alertCtrl.create ({
        title: 'Error',
        subTitle: 'Le hacen falta datos a tu contacto',
        buttons: ['Ok']
      });
      alert.present();
    }
  }

}
