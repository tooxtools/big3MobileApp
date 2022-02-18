import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
 
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private username: any;
  private password: any;
 
  constructor(private alertController: AlertController, private nav: NavController) { }
 
    getAuthentification(login: any, pass: any){
      if (login === 'toto@gmail.com' && pass === 'Mali2022@') {
        this.username = login;
        this.password = pass;
        this.nav.navigateForward('/home');
      } else {
        console.log('======== login ou mot de passe incorect');
        this.presentAlert();
        this.nav.navigateForward('/register');
 
      }
 
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Login ou mot de passe est incorrect',
      buttons: ['OK']
    });
 
    await alert.present();
  }
}
