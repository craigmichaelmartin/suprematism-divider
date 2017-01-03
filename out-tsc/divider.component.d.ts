import { AfterViewInit, EventEmitter, OnDestroy } from '@angular/core';
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
export declare class DividerComponent implements AfterViewInit, OnDestroy {
    subscriptions: Array<ISubscription>;
    left$: Observable<string>;
    mouseMove$: Observable<any>;
    mouseDown$: Observable<boolean>;
    isResizable: boolean;
    rightArrow: boolean;
    position: PositionI;
    leftUpdated: EventEmitter<{}>;
    isResizing: EventEmitter<{}>;
    el: any;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    protected setUpLeft(): void;
    protected setUpResize(): void;
}
