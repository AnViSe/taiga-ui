import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    TuiButtonDirective,
    TuiDataListModule,
    TuiDropdownModule,
    TuiExpandModule,
    TuiIconComponent,
    TuiLinkDirective,
    TuiNotificationModule,
    TuiSurfaceDirective,
    TuiTitleDirective,
} from '@taiga-ui/core';
import {TuiCardModule, TuiNavigationModule} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiBadgeDirective,
    TuiBadgeNotificationComponent,
    TuiBreadcrumbsModule,
    TuiChevronDirective,
    TuiFadeDirective,
    TuiSwitchComponent,
    TuiTabsModule,
} from '@taiga-ui/kit';
import {TuiHeaderDirective} from '@taiga-ui/layout';

import {TuiNavigationExample1} from './examples/1';
import {TuiNavigationExample2} from './examples/2';
import {TuiNavigationExample3} from './examples/3';
import {ExampleTuiNavigationComponent} from './navigation.component';

@NgModule({
    imports: [
        tuiGetDocModules(ExampleTuiNavigationComponent),
        CommonModule,
        FormsModule,
        TuiNotificationModule,
        TuiNavigationModule,
        TuiAvatarComponent,
        TuiButtonDirective,
        TuiIconComponent,
        TuiBadgeDirective,
        TuiBadgeNotificationComponent,
        TuiDropdownModule,
        TuiDataListModule,
        TuiFadeDirective,
        TuiExpandModule,
        TuiTabsModule,
        TuiCardModule,
        TuiSurfaceDirective,
        TuiTitleDirective,
        TuiHeaderDirective,
        TuiRepeatTimesModule,
        TuiAppearanceDirective,
        TuiSwitchComponent,
        TuiBreadcrumbsModule,
        TuiLinkDirective,
        TuiChevronDirective,
    ],
    declarations: [
        ExampleTuiNavigationComponent,
        TuiNavigationExample1,
        TuiNavigationExample2,
        TuiNavigationExample3,
    ],
    exports: [ExampleTuiNavigationComponent],
})
export class ExampleTuiNavigationModule {}
