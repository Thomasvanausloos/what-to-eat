import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddRecipeContainerComponent} from './add-recipe-container.component';
import {RecipeService} from '../recipe.service';
import SpyObj = jasmine.SpyObj;
import {BehaviorSubject} from 'rxjs';
import {Recipe} from '../recipe';
import {AddOrEditRecipeComponent} from '../add-or-edit-recipe/add-or-edit-recipe.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule, MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatTabsModule, MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {APP_ROUTES} from '../../app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AddRecipeContainerComponent', () => {
  let component: AddRecipeContainerComponent;
  let fixture: ComponentFixture<AddRecipeContainerComponent>;
  let recipeServiceSpy: SpyObj<RecipeService>;

  beforeEach(async(() => {
  const spyRecipeService = jasmine.createSpyObj('RecipeService', ['calculateNextId', 'saveRecipe']);
  const spyRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [ AddRecipeContainerComponent, AddOrEditRecipeComponent ],
      providers: [
        {provide: RecipeService, useValue: spyRecipeService},
        {provide: Router, useValue: spyRouter}],
      imports: [MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatListModule,
        MatTabsModule,
        MatDividerModule,
        MatSelectModule,
        MatIconModule,
        FormsModule,
        MatToolbarModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    recipeServiceSpy = TestBed.get(RecipeService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeContainerComponent);
    component = fixture.componentInstance;
    component.recipe$ = new BehaviorSubject<Recipe>(component.setupNewRecipe());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject the mock recipeService instead of the real one', () => {
    recipeServiceSpy.calculateNextId.and.returnValue(55);
    expect(recipeServiceSpy.calculateNextId()).toBe(55);
  });

  
});
