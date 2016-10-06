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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var common_1 = require('@angular/common');
var repo_name_component_1 = require('./divider.component');
var core_1 = require('@angular/core');
__export(require('./divider.component'));
var DividerModule = (function () {
    function DividerModule() {
    }
    DividerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
            ],
            declarations: [
                repo_name_component_1.DividerComponent,
            ],
            exports: [
                repo_name_component_1.DividerComponent,
            ],
            entryComponents: [
                repo_name_component_1.DividerComponent,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DividerModule);
    return DividerModule;
}());
exports.DividerModule = DividerModule;
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-divider/src/index.js.map
