import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlchartsComponent } from './mlcharts.component';

describe('MlchartsComponent', () => {
  let component: MlchartsComponent;
  let fixture: ComponentFixture<MlchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
