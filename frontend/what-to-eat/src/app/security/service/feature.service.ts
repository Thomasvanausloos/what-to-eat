import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  private PLANNING_FEATURE = false;

  public planningFeatureActive(): Observable<boolean> {
    return of(this.PLANNING_FEATURE);
  }
}
