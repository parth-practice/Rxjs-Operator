import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';

import { findIndex } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {

    /*
       Operator: find
       emit the first value that matches a given condition

      Operator: findIndex
       emit the index of the first value that matches a given condition
    */

    of(1,2,3,4,5,6,10)
      .pipe(findIndex(value => value > 2 && value % 2 === 0))
      .subscribe(value => console.log("Find element from observable:::", value));    

   console.log("_____________________________________________");

  }
}
