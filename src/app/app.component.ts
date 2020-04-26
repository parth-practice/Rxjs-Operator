import { Component, OnInit } from '@angular/core';

import { interval, of } from 'rxjs';

import { take, single, combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {

    /*
       Operator: combineAll
       combine latest value from multiple observables
       once all sources have emitted
    */

    const source1 = of('a','b','c');
    const source2 = interval(2000).pipe(take(3));
    const source3 = of(1,2,3,4,5);

    of(source1, source2, source3)
      .pipe(combineAll())
      .subscribe(([v1, v2, v3]) => console.log("Combined Elements", v1 + ' ' + v2 + ' ' + v3));

   console.log("_____________________________________________");

  }
}
