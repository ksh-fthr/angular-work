import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifyStatePattern } from './verify-state-pattern';

describe('VerifyStatePattern', () => {
    let component: VerifyStatePattern;
    let fixture: ComponentFixture<VerifyStatePattern>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VerifyStatePattern],
        }).compileComponents();

        fixture = TestBed.createComponent(VerifyStatePattern);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
