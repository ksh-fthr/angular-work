import { ElementRef, Injector, runInInjectionContext } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EventDirective } from './event.directive';

describe('EventDirective', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    it('should create an instance', () => {
        const elementRef = new ElementRef(document.createElement('div'));
        let directive: EventDirective | undefined;
        runInInjectionContext(TestBed.inject(Injector), () => {
            directive = new EventDirective(elementRef);
        });
        expect(directive).toBeTruthy();
    });
});
