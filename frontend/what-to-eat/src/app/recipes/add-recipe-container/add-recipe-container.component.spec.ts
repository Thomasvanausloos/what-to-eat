import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeContainerComponent } from './add-recipe-container.component';

describe('AddRecipeContainerComponent', () => {
  let component: AddRecipeContainerComponent;
  let fixture: ComponentFixture<AddRecipeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecipeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
