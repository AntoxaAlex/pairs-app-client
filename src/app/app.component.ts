import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import contractAddresses from './core/mock/contract-addresses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public contractAddresses: string[] = contractAddresses;
  public activeLink: number = 0;

  constructor(private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit() {
    const address = this._router.url.split('/')[3];
    if (address) {
      this.activeLink = this.contractAddresses.indexOf('/' + address);
    }
  }

  public navigateTo(contractAddress: string): void {
    this.activeLink = this.contractAddresses.indexOf(contractAddress);
    this._router.navigateByUrl(`/${contractAddress}` );
  }
}
