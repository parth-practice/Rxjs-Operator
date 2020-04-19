import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';

import { buffer, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {   
    
    /* 
      Operator: buffer
      add value into buffer
      emit buffered values as array whenever
      inner observable emits
    */

    // emit the buffer after 100ms
    interval(100)
      .pipe(
        buffer(interval(1000)),
        take(3)  // just limit the life of the source observable
      ).subscribe(data => {
        console.log("This is Buffer Data:::", data);
      });
  }
}
