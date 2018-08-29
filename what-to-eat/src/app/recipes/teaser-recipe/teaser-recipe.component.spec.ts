import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaserRecipeComponent } from './teaser-recipe.component';

describe('TeaserRecipeComponent', () => {
  let component: TeaserRecipeComponent;
  let fixture: ComponentFixture<TeaserRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaserRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaserRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
