import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent
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
  @Input() name = '';

  constructor() {
    console.log(
      '%c Child component constructor, value of name = ',
      'color: cyan',
      this.name
    );
  }
  ngOnInit(): void {
    console.log(
      '%c Child component ngOnInit, value of name = ',
      'color: cyan',
      this.name
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      '%c Child component ngOnChanges ',
      'color: cyan',
      changes,
      this.name
    );
  }
  ngAfterViewInit(): void {
    console.log('%c Child component ngAfterViewInit', 'color: cyan');
  }
  ngAfterContentInit(): void {
    console.log('%c Child component ngAfterContentInit', 'color: cyan');
  }
  ngDoCheck(): void {
    console.log('%c Child component ngDoCheck', 'color: cyan');
  }
  ngOnDestroy(): void {
    console.log('%c Child component ngOnDestroy', 'color: cyan');
  }
  ngAfterContentChecked(): void {
    console.log('%c Child component ngAfterContentChecked', 'color: cyan');
  }
  ngAfterViewChecked(): void {
    console.log('%c Child component ngAfterViewChecked', 'color: cyan');
  }
}
