import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class FeatureService {

  private PLANNING_FEATURE = false;

  public planningFeatureActive(): Observable<boolean> {
    return of(this.PLANNING_FEATURE);
  }
}
