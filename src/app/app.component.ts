import { Component, OnInit } from '@angular/core';

import { timer, of } from 'rxjs';

import { take, delay, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {

    /*
       Operator: mergeAll (FLATTENING)
       merge a list of observable
       mergeAll(1) will produce result same as concateAll, it will emit observable in a order
    */

    const source1 = timer(0, 1).pipe(take(10));

    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const source2 = of(...weekDays).pipe(delay(15));

    const weekend = ['Saturday', 'Sunday'];
    const source3 = of(...weekend).pipe(delay(5));

    of(source1, source2, source3)
      .pipe(mergeAll())
      .subscribe(result => console.log(result));

   console.log("_____________________________________________");

  }
}
