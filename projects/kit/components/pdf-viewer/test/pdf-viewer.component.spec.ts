import type {DebugElement} from '@angular/core';
import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {DomSanitizer} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiRootComponent} from '@taiga-ui/core';
import {TuiPageObject} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

import {TuiPdfViewerModule} from '../pdf-viewer.module';
import {tuiPdfViewerOptionsProvider} from '../pdf-viewer.options';
import {TuiPdfViewerService} from '../pdf-viewer.service';

describe('Pdf Viewer with TUI_PDF_VIEWER_OPTIONS', () => {
    @Component({
        template: `
            <tui-root></tui-root>
        `,
    })
    class TestComponent {}

    const label = 'Test';

    let fixture: ComponentFixture<TestComponent>;
    let tuiPdfViewerService: TuiPdfViewerService;
    let pageObject: TuiPageObject<TestComponent>;
    let sanitizer: DomSanitizer;

    function getLabelElement(): DebugElement {
        return pageObject.getByAutomationId('tui-pdf-viewer__label')!;
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, TuiRootComponent, TuiPdfViewerModule],
            declarations: [TestComponent],
            providers: [tuiPdfViewerOptionsProvider({label}), NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        tuiPdfViewerService = TestBed.inject(TuiPdfViewerService);
        pageObject = new TuiPageObject(fixture);
        sanitizer = TestBed.inject(DomSanitizer);
    });

    describe('label', () => {
        it('correctly shows label option data', () => {
            tuiPdfViewerService
                .open(sanitizer.bypassSecurityTrustResourceUrl(''))
                .subscribe();
            fixture.detectChanges();

            expect(getLabelElement().nativeElement.textContent.trim()).toBe(label);
        });
    });
});
