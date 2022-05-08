import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PairInformationComponent } from './pair-information.component';

const routes: Routes = [{ path: '', component: PairInformationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PairInformationRoutingModule {}
