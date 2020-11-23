import { Component, OnInit } from '@angular/core';
import { DistanceService } from '../shared/distance.service';
import { Globals } from '../../globals';

@Component({
  selector: 'app-distance-request',
  templateUrl: './distance-request.component.html',
  styleUrls: ['./distance-request.component.css'],
})
export class DistanceRequestComponent implements OnInit {
  constructor(
    private distanceService: DistanceService,
    public globals: Globals
  ) {}

  ngOnInit(): void {}

  onClicked() {
    this.globals.errorCode = null;
    let params = {
      source: this.globals.source,
      destination: this.globals.destination,
    };
    this.distanceService.getDistance(params);
  }
}
