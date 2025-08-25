import { Injectable } from '@angular/core';
import { ContextService } from '../context/context.service';
import { LowStateService } from '../LowState/low-state.service';
import { State } from '../i-state';

@Injectable({
    providedIn: 'root',
})
export class OffStateService {
    upState(context: ContextService): void {
        context.changeState(new LowStateService());
    }

    getText(): State {
        return 'off';
    }
}
