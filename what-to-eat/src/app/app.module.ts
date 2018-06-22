import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RecipesModule} from "./recipes/recipes.module";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";

const EXTERNAL_MODULES = [
    BrowserModule
];

const INTERNAL_MODULES= [
  RecipesModule,
  CoreModule,
  SharedModule
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
