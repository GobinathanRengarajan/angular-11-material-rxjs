import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  countries: string[] = [
    'India',
    'Afghanistan',
    'Spain',
    'Australia',
    'Nigeria',
  ];

  GetFilteredCountries(searchTerm: string): Observable<string[]> {
    console.log('initiated service');
    return of(
      this.countries.filter(
        (val) => val.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
      )
    ).pipe(delay(1000));
  }
}
