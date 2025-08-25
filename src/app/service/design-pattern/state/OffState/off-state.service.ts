import { Injectable } from '@angular/core';
import { ContextService } from '../context/context.service';
import { LowStateService } from '../LowState/low-state.service';

@Injectable({
    providedIn: 'root',
})
export class OffStateService {
    upState(context: ContextService): void {
        context.changeState(new LowStateService());
    }

    getText(): string {
        return 'Off';
    }
}
