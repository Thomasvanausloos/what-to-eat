import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RecipesModule} from './recipes/recipes.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';
import {PlanningModule} from './planning/planning.module';
import {SecurityModule} from './security/security.module';

const EXTERNAL_MODULES = [BrowserModule, RouterModule.forRoot(APP_ROUTES)];

const INTERNAL_MODULES = [
  RecipesModule.forRoot(),
  CoreModule,
  SharedModule.forRoot(),
  PlanningModule.forRoot(),
  SecurityModule.forRoot()
];

@NgModule({
  declarations: [AppComponent],
  imports: [EXTERNAL_MODULES, ...INTERNAL_MODULES, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
