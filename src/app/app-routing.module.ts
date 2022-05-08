import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import contractAddresses from './core/mock/contract-addresses';

const routes: Routes = [
  {
    path: '',
    redirectTo: `${contractAddresses[0]}`,
    pathMatch: 'full'
  },
  {
    path: ':contractAddress',
    loadChildren: () =>
      import('src/app/pages/pair-information/pair-information.module').then(
        (m) => m.PairInformationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
