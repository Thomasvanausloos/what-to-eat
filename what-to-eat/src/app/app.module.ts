import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RecipesModule } from "./recipes/recipes.module";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { APP_ROUTES } from "./app.routes";
import { RouterModule } from "../../node_modules/@angular/router";

const EXTERNAL_MODULES = [BrowserModule, RouterModule.forRoot(APP_ROUTES)];

const INTERNAL_MODULES = [RecipesModule.forRoot(), CoreModule, SharedModule];
@NgModule({
  declarations: [AppComponent],
  imports: [EXTERNAL_MODULES, ...INTERNAL_MODULES, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
