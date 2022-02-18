import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private login: any;
  private password: any;
  constructor(private infos : LoginService, private nav: NavController) { }

  ngOnInit() {
  }
  logclick(){
    this.infos.getAuthentification(this.login,this.password);

  }
  goregiste(){
    console.log('==Registre==');
    this.nav.navigateForward('/register')
  }

}
