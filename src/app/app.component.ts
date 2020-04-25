import { Component, OnInit } from '@angular/core';

import { interval, of, timer } from 'rxjs';

import { skipWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {   
    
    /* 
      Operator: skip
      it skips values from source observable and subscriber never seen that value

      Operator: skipLast
      This won't work if your observable is infinite
      ignore the last n values

      Operator: skipUntil
      skip the values untill the notifier sends the signal

      Operator: skipWhile
      skip the value while the condition held true
      once the condition becomes false, emits the coming values as normal
    */

    // of(1,2,3,4,5,6)
    //   .pipe(skipLast(1))
    //   .subscribe(sequence => console.log("This is buffer Sequence::", sequence));

    // timer(0, 1000)
    //   .pipe(
    //       take(6),
    //       skipUntil(timer(3000)) // once this starts sending signal observer gets value
    //   )
    //   .subscribe(value => console.log("Getting from Observable:::", value));

      of(1,2,3,1,2,3,4,5,6)
          // ^ condition false here
      .pipe(skipWhile(value => value < 3))
      .subscribe(sequence => console.log("This is buffer Sequence::", sequence));
  }
}
