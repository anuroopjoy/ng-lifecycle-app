import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Directive,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appChild]',
})
export class ChildDirective
  implements
    OnInit,
    OnChanges,
    AfterViewInit,
    AfterContentInit,
    DoCheck,
    OnDestroy,
    AfterContentChecked,
    AfterViewChecked
{
  constructor() {
    console.log(
      '%c Child directive constructor, value of name = ',
      'color: orange'
    );
  }
  ngOnInit(): void {
    console.log(
      '%c Child directive ngOnInit, value of name = ',
      'color: orange'
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      '%c Child directive ngOnChanges ',
      'color: orange',
      changes
    );
  }
  ngAfterViewInit(): void {
    console.log('%c Child directive ngAfterViewInit', 'color: orange');
  }
  ngAfterContentInit(): void {
    console.log(
      '%c Child directive ngAfterContentInit',
      'color: orange'
    );
  }
  ngDoCheck(): void {
    console.log('%c Child directive ngDoCheck', 'color: orange');
  }
  ngOnDestroy(): void {
    console.log('%c Child directive ngOnDestroy', 'color: orange');
  }
  ngAfterContentChecked(): void {
    console.log(
      '%c Child directive ngAfterContentChecked',
      'color: orange'
    );
  }
  ngAfterViewChecked(): void {
    console.log(
      '%c Child directive ngAfterViewChecked',
      'color: orange'
    );
  }
}
