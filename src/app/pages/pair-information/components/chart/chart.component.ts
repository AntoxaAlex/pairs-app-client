import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Series } from '@swimlane/ngx-charts';

import { eNames } from '../../../../core/enums/names.enum';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnInit {
  @Input() public pairData: Series;
  public contractAddress: string;
  public width = window.innerWidth;
  public height = 300;
  public animations: boolean = true;
  public xAxis: boolean = true;
  public yAxis: boolean = true;
  public showYAxisLabel: boolean = true;
  public showXAxisLabel: boolean = true;
  public xAxisLabel: string = eNames.xAxisLabel;
  public yAxisLabel: string = eNames.yAxisLabel;
  public timeline: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
