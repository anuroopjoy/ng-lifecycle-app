import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ContentChildComponent } from '../content-child/content-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent
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
  @ViewChild(ChildComponent) viewComponent!: ChildComponent;
  @ContentChild(ContentChildComponent) contentComponent!: ContentChildComponent;
  showChild = true;
  data = 'test';
  childData = '';
  constructor() {
    console.log('%c Parent component constructor', 'color: red');
  }
  ngOnInit(): void {
    console.log('%c Parent component ngOnInit', 'color: red');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('%c Parent component ngOnChanges ', changes, 'color: red');
  }
  ngAfterViewInit(): void {
    console.log(
      '%c Parent component ngAfterViewInit, viewChild = ',
      'color: red',
      this.viewComponent
    );
    // this.childData = this.viewComponent.name;
    // console.log('changing parent view with view child data', 'color: red');
  }
  ngAfterContentInit(): void {
    console.log(
      '%c Parent component ngAfterContentInit, contentChild = ',
      'color: red',
      this.contentComponent
    );
    this.childData = this.contentComponent.name;
    console.log(
      '%c changing parent view with content child data',
      'color: red'
    );
  }
  ngDoCheck(): void {
    console.log('%c Parent component ngDoCheck', 'color: red');
  }
  ngOnDestroy(): void {
    console.log('%c Parent component ngOnDestroy', 'color: red');
  }
  ngAfterContentChecked(): void {
    console.log('%c Parent component ngAfterContentChecked', 'color: red');
  }
  ngAfterViewChecked(): void {
    console.log('%c Parent component ngAfterViewChecked', 'color: red');
  }
  toggleChild() {
    this.showChild = !this.showChild;
  }

  changeInput() {
    this.data = 'new';
  }
}
