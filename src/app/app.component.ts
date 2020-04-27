import { Component, OnInit } from '@angular/core';

import { timer, of } from 'rxjs';

import { take, delay, mergeAll, groupBy, mergeMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {

    /*
       Operator: groupBy
       group the values into array of observables
        for each value
        call function with the value as parameter
        the result is used as the group id
        each group works as an observable
    */

    const posts = [
      { id: 1, likes: 2, comments: 2 },
      { id: 1, likes: 2, comments: 4 },
      { id: 2, likes: 2, comments: 3 },
      { id: 3, likes: 0, comments: 2 },
      { id: 2, likes: 2, comments: 4 },
      { id: 2, likes: 2, comments: 2 },
      { id: 3, likes: 2, comments: 5 },
      { id: 3, likes: 2, comments: 1 }
    ];

    const array = of(...posts).pipe(groupBy(post => post.id),
                      mergeMap(group => group.pipe(toArray())));
    
    const out = [];
    array.subscribe(a => out.push(a));

    console.log(out[0]);
    console.log(out[1]);
    console.log(out[2]);

   console.log("_____________________________________________");

  }
}
