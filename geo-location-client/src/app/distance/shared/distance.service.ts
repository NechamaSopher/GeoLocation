import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../../globals';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class DistanceService {
  constructor(private http: HttpClient, private globals: Globals) {}

  getDistance(params: any) {
    return this.http.patch('http://localhost:3000/distance', params).subscribe(
      (result: any) => {
        if (result)
      {
        this.getPopularSearchesList();
        this.getPopularSearch();
        this.globals.distance = result.distance;

      }
      },
      (error) => {
        this.globals.errorCode = error.status;
      }
    );
  }
  getPopularSearch() {
    return this.http.get('http://localhost:3000/distance/popular-search')
  }
  getPopularSearchesList() {
    return this.http.get('http://localhost:3000/distance/popular-search-list')
  }
}
