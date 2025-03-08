import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class InicioPage {
  constructor(
    private navCtrl: NavController
  ) {}

  transferir() {
    console.log('Transferir');
    // Aquí tu lógica para transferir
  }

  pagarQR() {
    console.log('Pagar a QR');
    // Aquí tu lógica para pagar con QR
  }

  goTo(ruta: string) {
    console.log(`Navegando a ${ruta}`);
    // Redirige según tu lógica de rutas en Ionic
    // this.navCtrl.navigateForward(`/${ruta}`);
  }
}
