import { Component, OnInit } from '@angular/core';

import { timer } from 'rxjs';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {

    /* 
      Operator: take
       it is opposite of skip, the first n values and complete observable

      Operator: takeLast
       it doesn't work with infinite sets of observable
       emits last n values and complete observable
      
      Operator: takeUntil
       take the value until the notifier sends signal

      Operator: takeWhile
       take the values while the condition held true
       once the condition becomes false, emit complete event
    */

    const source = timer(0, 1000);

    source.pipe(
      take(5)
    )
    .subscribe(value => console.log("values::", value),
      null,
      () => console.log("Complete")
    );
  }
}
