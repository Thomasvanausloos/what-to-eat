import {Component, Input, OnInit} from '@angular/core';
import {FeatureService} from '../../security/service/feature.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  @Input() applicationTitle: string;
  planningFeatureEnabled: Observable<boolean>;
  constructor(private featureService: FeatureService) {}

  ngOnInit(): void {
    this.planningFeatureEnabled = this.featureService.planningFeatureActive();
  }
  }
