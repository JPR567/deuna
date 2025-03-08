import { Component } from '@angular/core';
// IMPORTS DE ANGULAR E IONIC
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,   // Para directivas/pipes (ngFor, currency, etc.)
    FormsModule,    // Para [(ngModel)] si la usas
    IonicModule     // Para <ion-header>, <ion-button>, etc.
  ],
})
export class HomePage {

  goToLogin() {
    console.log('Ir a Login');
    // Aquí podrías navegar a la página de Login, ej:
    // this.navCtrl.navigateForward('/login');
  }

  register() {
    console.log('Ir a Registro');
    // this.navCtrl.navigateForward('/register');
  }

  recoverPassword() {
    console.log('Recuperar contraseña');
    // Muestra alerta o navega a tu pantalla de “recuperar”.
  }

}
