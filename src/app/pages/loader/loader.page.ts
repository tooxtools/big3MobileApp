import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor( private nav: NavController) { }

  ngOnInit() {

  }

/*creating aservice a for rooting*/
goTologin(){ 
console.log('===== go to login page =====')
this.nav.navigateForward('/login')
}}
