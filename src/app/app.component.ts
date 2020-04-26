import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';

import { single } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {

    /*
       Operator: single
       check that a single value matches the specific condition
       If single value matches from the observable, emit that value
       If no value matches from the observable, emit undefined
       If more than one value match from the observable, emit an error
    */

    of(1,2,3,4,5,6,10)
      .pipe(single(value => value > 6))
      .subscribe(value => console.log("Find element from observable:::", value));    

   console.log("_____________________________________________");

  }
}
