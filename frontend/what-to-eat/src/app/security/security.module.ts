import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureService} from './service/feature.service';
import {SecurityDirective} from './directive/security.directive';
import {PlanningFeatureGuard} from './guard/planning-feature.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SecurityDirective],
  exports: [SecurityDirective]
})
export class SecurityModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SecurityModule,
      providers: [FeatureService,
                  PlanningFeatureGuard
      ]
    };
  }
}
