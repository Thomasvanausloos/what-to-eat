import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditRecipeComponent } from './add-or-edit-recipe.component';

describe('AddOrEditRecipeComponent', () => {
  let component: AddOrEditRecipeComponent;
  let fixture: ComponentFixture<AddOrEditRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
