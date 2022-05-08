import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() public contractAddresses: string[];
  @Input() public activeLink: number;
  @Output() public linkClicked = new EventEmitter<string>();
  constructor() {}

  public navigateTo(contractAddress: string): void {
    this.linkClicked.emit(contractAddress);
  }
}
