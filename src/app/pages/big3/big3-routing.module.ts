import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Big3Page } from './big3.page';

const routes: Routes = [
  {
    path: '',
    component: Big3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Big3PageRoutingModule {}
