import { Component, VERSION } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, from, of, combineLatest } from 'rxjs';
import {
  debounceTime,
  switchMap,
  map,
  tap,
  throttleTime,
  distinctUntilChanged,
  mergeMap,
  delay,
} from 'rxjs/operators';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  titleText = 'Angular Material Playground ' + VERSION.major;
  filteredVaules: Observable<string[]>;
  countryControl: FormControl = new FormControl();
  result: any = [];
  comb: any = [];
  source1 = of('First', 'zero');
  source2 = of('Second', 'one');
  source3 = of('Third', 'AnotherThird');

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.countryControl.valueChanges
      .pipe(
        debounceTime(500)
        // throttleTime(300)
      )
      .subscribe((val) => {
        console.log(val);
        this.filteredVaules = this._dataService.GetFilteredCountries(val);
      });

    from([1, 1, 2, 3, 3, 1])
      .pipe(distinctUntilChanged())
      .subscribe((data) => {
        this.result.push(data);
        console.log(`distinctUntilChanged (data): ${data}`);
      });

    combineLatest(this.source1, this.source2, this.source3).subscribe((data) =>
      this.comb.push(data)
    );
  }

  public example(operator) {
    from([0, 1, 2, 3, 4, 5])
      .pipe(operator((x) => of(x).pipe(delay(500))))
      .subscribe(
        console.log,
        () => {},
        () => console.log(`${operator.name} completed`)
      );
  }

  public mm() {
    this.example(mergeMap);
  }

  public sm() {
    this.example(switchMap);
  }
}
