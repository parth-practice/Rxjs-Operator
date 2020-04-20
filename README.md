# RxjsOperator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## List Of Operator
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


