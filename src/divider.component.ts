import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/combineLatest';
import { ISubscription } from 'rxjs/Subscription';

export interface PositionI {
  top: string;
  left: string;
}

@Component({
  selector: 'supre-divider',
  template: require('./divider.component.html'),
  styles: [require('./divider.component.css')]
})
export class DividerComponent implements AfterViewInit, OnDestroy {

  // ------ Properties --------------------------------------------------------

  subscriptions: Array<ISubscription> = [];
  left$: Observable<string>;
  mouseMove$: Observable<any>;
  mouseDown$: Observable<boolean>;
  @Input() isResizable: boolean = true;
  @Input() rightArrow: boolean = true;
  @Input() position: PositionI;
  @Output() leftUpdated = new EventEmitter();
  @Output() isResizing = new EventEmitter();
  @ViewChild('divider') el;


  // ------ Lifecycle Hooks ---------------------------------------------------

  ngAfterViewInit() {
    if (this.isResizable) {
      this.setUpResize();
    } else {
      this.setUpLeft();
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }


  // ------ Helper Methods ----------------------------------------------------

  protected setUpLeft() {
    this.left$ = Observable.of(this.position.left).take(1);
  }

  protected setUpResize() {
    this.mouseMove$ = Observable.fromEvent(document, 'mousemove');
    const el = this.el.nativeElement;
    this.mouseDown$ = Observable.fromEvent(el, 'mousedown').mapTo(true)
      .merge(Observable.fromEvent(el, 'mouseup').mapTo(false))
      .startWith(false);
    this.left$ = this.mouseMove$
      .combineLatest(this.mouseDown$)
      .filter(([, mousedown]) => !!mousedown)
      .map(([event]) => `${event.clientX - 3}px`)
      .startWith(this.position.left);
    this.subscriptions.push(...[
      this.mouseDown$
        .subscribe(isResizing => this.isResizing.emit(isResizing)),
      this.left$
        .subscribe(left => this.leftUpdated.emit(left))
    ]);
  }

}
