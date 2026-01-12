import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AfterContentParentComponent } from './after-content-parent.component';
import { AfterContentChildComponent } from '../after-content-child/after-content-child.component';

describe('AfterContentParentComponent', () => {
    let component: AfterContentParentComponent;
    let fixture: ComponentFixture<AfterContentParentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [AfterContentParentComponent, AfterContentChildComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AfterContentParentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
