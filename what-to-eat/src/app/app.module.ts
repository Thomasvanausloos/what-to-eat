import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RecipesModule } from "./recipes/recipes.module";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const EXTERNAL_MODULES = [BrowserModule];

const INTERNAL_MODULES = [RecipesModule.forRoot(), CoreModule, SharedModule];
@NgModule({
  declarations: [AppComponent],
  imports: [EXTERNAL_MODULES, ...INTERNAL_MODULES, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
