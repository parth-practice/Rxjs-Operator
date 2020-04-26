import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';

import { concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {

    /*
       Operator: concatAll
       concate value from multiple observables
    */

    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const weekend = ['Saturday', 'Sunday'];

    of(of(...weekDays), of(...weekend))
      .pipe(concatAll())
      .subscribe(printDay => console.log(printDay));

   console.log("_____________________________________________");

  }
}
