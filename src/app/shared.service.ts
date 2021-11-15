import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class SharedService implements OnDestroy {
  constructor() {
    console.log('Shared service constructor');
  }
  ngOnDestroy(): void {
    console.log('Shared service ngOnDestroy');
  }
}
