import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SwitchTabService } from 'src/app/service/switch-tab/switch-tab.service';

import { SwitchTabComponent } from './switch-tab.component';

describe('SwitchTabComponent', () => {
    let component: SwitchTabComponent;
    let fixture: ComponentFixture<SwitchTabComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [SwitchTabComponent],
            providers: [
                {
                    provide: SwitchTabService,
                    useValue: { tabs: [], getCurrentContents: () => undefined, changeCurrentContents: () => undefined },
                },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SwitchTabComponent);
        component = fixture.componentInstance;
        // ensure tabs and currentTab are defined to avoid ngComponentOutlet errors
        (component as any)._tabs = [];
        (component as any)._currentTab = undefined;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
