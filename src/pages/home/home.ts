import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactoPage } from '../contacto/contacto';
import { NewcontactPage } from '../newcontact/newcontact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
contacts = ContactoPage;
nuevo = NewcontactPage;

contactos = [
  {nombre: 'Montse Jiménez', telefono: '(33) 34 12 42 89', imagen: "../assets/girl.png", email: 'montse@outlook.com', fb: 'montse.jimenez', ig: 'montse.jmz', twt: '@fabulosa'},
  {nombre: 'Salvador Rodríguez', telefono: '(33) 56 72 45 99', imagen: "../assets/boy.png", email: 'chava@outlook.com', fb: 'chava.rodriguez', ig: 'chava.rdz', twt: '@chavasaurio'}
]

  constructor(public navCtrl: NavController) {

  }

  clickNombre(c) {
    this.navCtrl.push(this.contacts, {contacto: c});
  }

  nuevoContacto() {
    
    this.navCtrl.push(this.nuevo, {contactos: this.contactos});
  }

}
