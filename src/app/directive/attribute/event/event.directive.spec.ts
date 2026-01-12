import { ElementRef } from '@angular/core';
import { EventDirective } from './event.directive';

describe('EventDirective', () => {
    it('should create an instance', () => {
        const elementRef = new ElementRef(document.createElement('div'));
        const directive = new EventDirective(elementRef);
        expect(directive).toBeTruthy();
    });
});
