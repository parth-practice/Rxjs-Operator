import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';

import { max } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {

    /* 
      Operator: min - this won't work for infinite observable
       find the min value within a stream
       the defination of 'minimum' can be determine through a comparator function

       Operator: max - this won't work for infinite observable
       find the max value within a stream
       the defination of 'maximum' can be determine through a comparator function
    */

    of(1,3,5,1,3,10)
      .pipe(max())
      .subscribe(value => console.log("Max from observable:::", value));    

   console.log("_____________________________________________");

   of(1,3,5,20,-3,10)
   .pipe(max((x, y) => x > y ? 1 : -1))
   .subscribe(value => console.log("Max even number from observable:::", value));

  }
}
