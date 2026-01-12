import { ElementRef, Injector, runInInjectionContext } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TemplateDirective } from './template.directive';

describe('TemplateDirective', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    it('should create an instance', () => {
        const elementRef = new ElementRef(document.createElement('div'));
        let directive: TemplateDirective | undefined;
        runInInjectionContext(TestBed.inject(Injector), () => {
            directive = new TemplateDirective(elementRef);
        });
        expect(directive).toBeTruthy();
    });
});
