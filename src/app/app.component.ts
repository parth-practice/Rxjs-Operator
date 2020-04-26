import { Component, OnInit } from '@angular/core';

import { of, interval, Observable } from 'rxjs';

import { take, sample } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {

    /* 
      Operator: sample
       emit the most recent value when the notifier sends signal
       parameter is an observable
    */

    const source = interval(100);
    const notifier = new Observable(observer => {
      setTimeout(() => observer.next(), 150);
      setTimeout(() => observer.next(), 300)
      setTimeout(() => observer.complete(), 850)
    });

    source
    .pipe(
        sample(notifier),
        take(3))
    .subscribe(data => console.log("Data from observable:::", data));
    

   console.log("_____________________________________________");
  }
}
