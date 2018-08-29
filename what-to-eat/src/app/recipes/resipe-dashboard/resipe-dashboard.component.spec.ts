import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResipeDashboardComponent } from './resipe-dashboard.component';

describe('ResipeDashboardComponent', () => {
  let component: ResipeDashboardComponent;
  let fixture: ComponentFixture<ResipeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResipeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResipeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
