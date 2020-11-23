import { Component, OnInit } from '@angular/core';
import { DistanceService } from '../shared/distance.service';
import { Globals } from '../../globals';

@Component({
  selector: 'app-distance-details',
  templateUrl: './distance-details.component.html',
  styleUrls: ['./distance-details.component.css'],
})
export class DistanceDetailsComponent implements OnInit {
  popularSearch: any;
  popularSearches: any;
  distance: any;
  constructor(
    private distanceService: DistanceService,
    public globals: Globals
  ) {
    this.distance = this.globals.distance;
  }

  ngOnInit(): void {
    this.distanceService.getPopularSearch().subscribe((res) => {
      if (res) this.popularSearch = res;
    });
    this.distanceService.getPopularSearchesList().subscribe((res) => {
      if (res) this.popularSearches = res;
    });
  }
  onClicked() {
    this.globals.distance = null;
    this.globals.source = '';
    this.globals.destination = '';
  }
}
