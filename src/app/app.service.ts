import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Series } from '@swimlane/ngx-charts';

import { PairResponseData } from './core/interfaces/pair-data.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private _http: HttpClient) {}

  public getPairInformation(contractAddress: string): Observable<Series> {
    return this._http
      .get<PairResponseData[]>(
        `https://pairs1-server.herokuapp.com/?contractAddress=${contractAddress}`
      )
      .pipe(
        map((pairResponseData: PairResponseData[]) => {
          return {
            name: contractAddress,
            series: pairResponseData.map((data: PairResponseData) => {
              return {
                name: this.modifyDate(data.time),
                value: this.modifyVolume(data.volume),
              };
            }),
          };
        })
      );
  }

  public modifyDate(date: Date | string): string {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    return `${date.getDate()}`;
  }

  public modifyVolume(volume: number): number {
    return volume / 1000000;
  }
}
