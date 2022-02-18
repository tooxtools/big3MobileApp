import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Big3PageRoutingModule } from './big3-routing.module';

import { Big3Page } from './big3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Big3PageRoutingModule
  ],
  declarations: [Big3Page]
})
export class Big3PageModule {}
