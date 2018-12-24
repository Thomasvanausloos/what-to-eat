import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeatureService} from "../security/service/feature.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: []
})
export class SharedModule {

  public static  forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
