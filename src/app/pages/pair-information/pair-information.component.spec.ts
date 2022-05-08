import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairInformationComponent } from './pair-information.component';

describe('PairInformationComponent', () => {
  let component: PairInformationComponent;
  let fixture: ComponentFixture<PairInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PairInformationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PairInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
