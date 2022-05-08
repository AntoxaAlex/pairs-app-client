import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  catchError,
  map,
  Observable,
  of,
  Subject,
  switchMap,
  takeUntil,
} from 'rxjs';
import { Series } from '@swimlane/ngx-charts';

import { AppService } from '../../app.service';
import { eNames } from '../../core/enums/names.enum';

@Component({
  selector: 'app-pair-information',
  templateUrl: './pair-information.component.html',
  styleUrls: ['./pair-information.component.scss'],
})
export class PairInformationComponent implements OnInit, OnDestroy {
  public pairData$: Observable<Series>;
  public error: Error;
  private _destroy$ = new Subject<void>();

  constructor(
    private _route: ActivatedRoute,
    private _appService: AppService
  ) {}

  ngOnInit(): void {
    this.pairData$ = this._route.params.pipe(
      takeUntil(this._destroy$),
      map((paramResponse: Params) => paramResponse[eNames.contractAddress]),
      switchMap((contractAddress: string) =>
        this._appService.getPairInformation(contractAddress)
      ),
      catchError((err) => {
        this.error = err;
        return of(err);
      })
    );
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
