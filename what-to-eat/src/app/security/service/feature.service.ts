import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  public planningFeatureActive(): Observable<boolean> {
    return of(false);
  }
}
