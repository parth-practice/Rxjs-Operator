import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';

import { first, last } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {

    /* 
      Operator: first
       emits only first from observable

       Operator: last
       emits only last from observable
       Don't work on infinite observable --> it returns nothing as there is no last value from infinite observable
       Error out on empty observable
    */

    of(1,3,5,7,9,10)
      .pipe(first())
      .subscribe(first => console.log("First from observable:::", first));    

   console.log("_____________________________________________");

   of(1,3,5,7,9,10)
   .pipe(first(value => value%2 === 0))
   .subscribe(first => console.log("First even number from observable:::", first));

   of(1,3,5,6,7,9,10)
   .pipe(last(value => value%2 === 0))
   .subscribe(last => console.log("Last even number from observable:::", last));

  }
}
