import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiLinkDirective,
    TuiNotificationModule,
} from '@taiga-ui/core';

import {ExampleTuiConfirmComponent} from './confirm.component';
import {TuiConfirmExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonDirective,
        TuiLinkDirective,
        RouterModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiConfirmComponent)),
        TuiNotificationModule,
    ],
    declarations: [ExampleTuiConfirmComponent, TuiConfirmExample1],
    exports: [ExampleTuiConfirmComponent],
})
export class ExampleTuiConfirmModule {}
