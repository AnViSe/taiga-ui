import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiMobileCalendarDialogModule,
    TuiMobileCalendarModule,
} from '@taiga-ui/addon-mobile';
import {TuiButtonDirective, TuiLinkDirective} from '@taiga-ui/core';

import {TuiMobileCalendarExample1} from './examples/1';
import {TuiMobileCalendarExample2} from './examples/2';
import {TuiMobileCalendarExample3} from './examples/3';
import {TuiMobileCalendarExample4} from './examples/4';
import {TuiMobileCalendarExample5} from './examples/5';
import {ExampleTuiMobileCalendarComponent} from './mobile-calendar.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiLinkDirective,
        TuiButtonDirective,
        TuiMobileCalendarModule,
        TuiMobileCalendarDialogModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiMobileCalendarComponent)),
    ],
    declarations: [
        ExampleTuiMobileCalendarComponent,
        TuiMobileCalendarExample1,
        TuiMobileCalendarExample2,
        TuiMobileCalendarExample3,
        TuiMobileCalendarExample4,
        TuiMobileCalendarExample5,
    ],
    exports: [ExampleTuiMobileCalendarComponent],
})
export class ExampleTuiMobileCalendarModule {}
