import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';

import { distinctUntilKeyChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {

    /* 
      Operator: distinct
       emits unique values across whole source

      Operator: distinctUntilChange
       do not emit value until change

      Operator: distinctUntilKeyChanged
        pick the value of the given field
        do not emit value until change
    */

    const post = [
      {post: 1, likes: 2, author: { id: 10 }},
      {post: 2, likes: 5, author: { id: 11 }},
      {post: 3, likes: 5, author: { id: 12 }},
      {post: 4, likes: 6, author: { id: 12 }}
    ];
  
    console.log("POSTS", post);
    of(...post)
    .pipe(distinctUntilKeyChanged('likes'))
    .subscribe(data => console.log(data.author, data.likes, data.author.id));

   console.log("_____________________________________________");

   of(...post)
   .pipe(distinctUntilKeyChanged('author', (a1,a2) => a1.id === a2.id))
   .subscribe(data => console.log(data.author, data.likes, data.author.id));
  }
}
