import { Component } from '@angular/core';
import { DistanceService } from './distance/shared/distance.service';
import { Globals } from './globals';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DistanceService]
})
export class AppComponent {
  title = 'geo-location';
  constructor(public  globals: Globals) { }
}
