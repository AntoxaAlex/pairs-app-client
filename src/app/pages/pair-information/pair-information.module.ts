import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PairInformationRoutingModule } from './pair-information-routing.module';
import { ChartComponent } from './components/chart/chart.component';
import { ErrorComponent } from './components/error/error.component';
import { PairInformationComponent } from './pair-information.component';

@NgModule({
  declarations: [ChartComponent, ErrorComponent, PairInformationComponent],
  exports: [ChartComponent, ErrorComponent],
  imports: [CommonModule, PairInformationRoutingModule, NgxChartsModule],
})
export class PairInformationModule {}
