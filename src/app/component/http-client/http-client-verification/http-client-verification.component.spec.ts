import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { HttpClientService } from '../../../service/http-client/http-client.service';

import { HttpClientVerificationComponent } from './http-client-verification.component';

describe('HttpClientVerificationComponent', () => {
    let component: HttpClientVerificationComponent;
    let fixture: ComponentFixture<HttpClientVerificationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [HttpClientVerificationComponent],
            providers: [
                {
                    provide: HttpClientService,
                    useValue: {
                        get$: () => () => [],
                        register$: () => () => [],
                        update$: () => () => [],
                        delete$: () => () => [],
                    },
                },
            ],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HttpClientVerificationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
