import { ElementRef } from '@angular/core';
import { TemplateDirective } from './template.directive';

describe('TemplateDirective', () => {
    it('should create an instance', () => {
        const elementRef = new ElementRef(document.createElement('div'));
        const directive = new TemplateDirective(elementRef);
        expect(directive).toBeTruthy();
    });
});
