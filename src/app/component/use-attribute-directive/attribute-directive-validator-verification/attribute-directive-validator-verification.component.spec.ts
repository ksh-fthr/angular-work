import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AttributeDirectiveValidatorVerificationComponent } from './attribute-directive-validator-verification.component';

describe('AttributeDirectiveValidatorVerificationComponent', () => {
    let component: AttributeDirectiveValidatorVerificationComponent;
    let fixture: ComponentFixture<AttributeDirectiveValidatorVerificationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [AttributeDirectiveValidatorVerificationComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AttributeDirectiveValidatorVerificationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
