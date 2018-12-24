import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {FeatureService} from "../service/feature.service";

@Injectable()
export class PlanningFeatureGuard implements CanActivate {


  constructor(private featureService: FeatureService) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return this.featureService.planningFeatureActive();
    return false;
  }
}
