import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecipeContainerComponent } from './edit-recipe-container.component';

describe('EditRecipeContainerComponent', () => {
  let component: EditRecipeContainerComponent;
  let fixture: ComponentFixture<EditRecipeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecipeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecipeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
