import { Component, OnInit } from '@angular/core';

import { interval, of } from 'rxjs';

import { bufferCount } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {   
    
    /* 
      Operator: bufferCount
      add value into buffer untill full
      then emit the buffer
      Second parameter of bufferCount is optional
    */

    of(1,2,3,4,5,6)
      .pipe(bufferCount(2,1))
      .subscribe(sequence => console.log("This is buffer Sequence::", sequence));
  }
}
