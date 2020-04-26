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

      Operator: buffer  or Operator: window (emits values as an observable)
      add value into buffer
      emit buffered values as array whenever
      inner observable emits

      Operator: bufferCount
      add value into buffer untill full
      then emit the buffer
      Second parameter of bufferCount is optional

      // skip
      Operator: skip
      it skips values from source observable and subscriber never seen that value

      Operator: skipLast
      This won't work if your observable is infinite
      ignore the last n values

      Operator: skipUntil
      skip the values untill the notifier sends the signal

      Operator: skipWhile
      skip the value while the condition held true
      once the condition becomes false, emits the coming values as normal

     // take
      Operator: take
       it is opposite of skip, the first n values and complete observable

      Operator: takeLast
       it doesn't work with infinite sets of observable
       emits last n values and complete observable
      
      Operator: takeUntil
       take the value until the notifier sends signal

      Operator: takeWhile
       take the values while the condition held true
       once the condition becomes false, emit complete event

      // distinct
      Operator: distinct
       emits unique values across whole source

      Operator: distinctUntilChange
       do not emit value until change

      Operator: distinctUntilKeyChanged
        pick the value of the given field
        do not emit value until change
