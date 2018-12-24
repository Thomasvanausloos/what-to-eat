import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DayComponent} from './day/day.component';
import {WeekComponent} from './week/week.component';

import {MatCardModule} from '@angular/material/card';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
  ],
  declarations: [DayComponent,
      WeekComponent]
})
export class PlanningModule {
  public static forRoot() {
    return {
      ngModule: PlanningModule,
      providers: []
    } ;
  }
}
