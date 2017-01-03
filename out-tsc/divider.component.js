"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/fromEvent');
require('rxjs/add/observable/of');
require('rxjs/add/operator/take');
require('rxjs/add/operator/map');
require('rxjs/add/operator/mapTo');
require('rxjs/add/operator/merge');
require('rxjs/add/operator/startWith');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/combineLatest');
var DividerComponent = (function () {
    function DividerComponent() {
        // ------ Properties --------------------------------------------------------
        this.subscriptions = [];
        this.isResizable = true;
        this.rightArrow = true;
        this.leftUpdated = new core_1.EventEmitter();
        this.isResizing = new core_1.EventEmitter();
    }
    // ------ Lifecycle Hooks ---------------------------------------------------
    DividerComponent.prototype.ngAfterViewInit = function () {
        if (this.isResizable) {
            this.setUpResize();
        }
        else {
            this.setUpLeft();
        }
    };
    DividerComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    // ------ Helper Methods ----------------------------------------------------
    DividerComponent.prototype.setUpLeft = function () {
        this.left$ = Observable_1.Observable.of(this.position.left).take(1);
    };
    DividerComponent.prototype.setUpResize = function () {
        var _this = this;
        this.mouseMove$ = Observable_1.Observable.fromEvent(document, 'mousemove');
        var el = this.el.nativeElement;
        this.mouseDown$ = Observable_1.Observable.fromEvent(el, 'mousedown').mapTo(true)
            .merge(Observable_1.Observable.fromEvent(el, 'mouseup').mapTo(false))
            .startWith(false);
        this.left$ = this.mouseMove$
            .combineLatest(this.mouseDown$)
            .filter(function (_a) {
            var mousedown = _a[1];
            return !!mousedown;
        })
            .map(function (_a) {
            var event = _a[0];
            return ((event.clientX - 3) + "px");
        })
            .startWith(this.position.left);
        (_a = this.subscriptions).push.apply(_a, [
            this.mouseDown$
                .subscribe(function (isResizing) { return _this.isResizing.emit(isResizing); }),
            this.left$
                .subscribe(function (left) { return _this.leftUpdated.emit(left); })
        ]);
        var _a;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DividerComponent.prototype, "isResizable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DividerComponent.prototype, "rightArrow", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DividerComponent.prototype, "position", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DividerComponent.prototype, "leftUpdated", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DividerComponent.prototype, "isResizing", void 0);
    __decorate([
        core_1.ViewChild('divider'), 
        __metadata('design:type', Object)
    ], DividerComponent.prototype, "el", void 0);
    DividerComponent = __decorate([
        core_1.Component({
            selector: 'supre-divider',
            template: require('./divider.component.html'),
            styles: [require('./divider.component.css')]
        }), 
        __metadata('design:paramtypes', [])
    ], DividerComponent);
    return DividerComponent;
}());
exports.DividerComponent = DividerComponent;
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-divider/src/divider.component.js.map