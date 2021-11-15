import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
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
  title = 'lifecycle-app';
  data = 'content input';
  childData = '';
  constructor() {
    console.log('%c App component constructor', 'color: blue');
  }
  ngOnInit(): void {
    console.log('%c App component ngOnInit', 'color: blue');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('%c App component ngOnChanges ', changes, 'color: blue');
  }
  ngAfterViewInit(): void {
    console.log('%c App component ngAfterViewInit', 'color: blue');
  }
  ngAfterContentInit(): void {
    console.log('%c App component ngAfterContentInit', 'color: blue');
  }
  ngDoCheck(): void {
    console.log('%c App component ngDoCheck', 'color: blue');
  }
  ngOnDestroy(): void {
    console.log('%c App component ngOnDestroy', 'color: blue');
  }
  ngAfterContentChecked(): void {
    console.log('%c App component ngAfterContentChecked', 'color: blue');
  }
  ngAfterViewChecked(): void {
    console.log('%c App component ngAfterViewChecked', 'color: blue');
  }

  handleChildData(data: string) {
    this.childData = data;
  }
}
