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
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss'],
})
export class ContentChildComponent
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
      '%c Content Child component constructor, value of name = ',
      'color: yellow',
      this.name
    );
  }
  ngOnInit(): void {
    console.log(
      '%c Content Child component ngOnInit, value of name = ',
      'color: yellow',
      this.name
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      '%c Content Child component ngOnChanges ',
      'color: yellow',
      changes,
      this.name
    );
  }
  ngAfterViewInit(): void {
    console.log('%c Content Child component ngAfterViewInit', 'color: yellow');
  }
  ngAfterContentInit(): void {
    console.log(
      '%c Content Child component ngAfterContentInit',
      'color: yellow'
    );
  }
  ngDoCheck(): void {
    console.log('%c Content Child component ngDoCheck', 'color: yellow');
  }
  ngOnDestroy(): void {
    console.log('%c Content Child component ngOnDestroy', 'color: yellow');
  }
  ngAfterContentChecked(): void {
    console.log(
      '%c Content Child component ngAfterContentChecked',
      'color: yellow'
    );
  }
  ngAfterViewChecked(): void {
    console.log(
      '%c Content Child component ngAfterViewChecked',
      'color: yellow'
    );
  }
}
