import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider.component';
import { NgModule } from '@angular/core';

export * from './divider.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        DividerComponent,
    ],
    exports: [
        DividerComponent,
    ],
    entryComponents: [
        DividerComponent,
    ]
})
export class DividerModule {

}
