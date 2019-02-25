import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'sample',
  template: '{{ someValue }}'
})
export class SampleComponent implements OnInit, OnChanges {
  someValue: any;

  constructor() {
    console.log('constructed...');
    this.someValue = '-';
  }

  @Input() set foo(value) {
    console.log(value);
    this.someValue = value;
  }

  ngOnInit() {
    console.log('ngOnInit...');
  }

  ngOnChanges() {
    console.log('ngOnChanges...');
  }

  ngDoCheck() {
    console.log('ngDoCheck...');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit...');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked...');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit...');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked...');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy...');
  }

}
