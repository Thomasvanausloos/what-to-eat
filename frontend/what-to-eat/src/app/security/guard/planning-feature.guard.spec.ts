import { TestBed, async, inject } from '@angular/core/testing';

import { PlanningFeatureGuard } from './planning-feature.guard';

describe('PlanningFeatureGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanningFeatureGuard]
    });
  });

  it('should ...', inject([PlanningFeatureGuard], (guard: PlanningFeatureGuard) => {
    expect(guard).toBeTruthy();
  }));
});
