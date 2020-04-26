import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';

import { elementAt } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {

    /* 
      Operator: elementAt - this won't work to specify get element from end of the stream b y providing negative value 
       emit only the (n+1)-th emitted value
    */

    of(1,3,5,1,3,10)
      .pipe(elementAt(2))
      .subscribe(value => console.log("2nd element from observable:::", value));    

   console.log("_____________________________________________");

  }
}
