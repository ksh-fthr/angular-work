import { Injectable } from '@angular/core';
import { ContextService } from '../context/context.service';
import { HighStateService } from '../HighState/high-state.service';
import { State } from '../i-state';

@Injectable({
    providedIn: 'root',
})
export class LowStateService {
    upState(context: ContextService): void {
        context.changeState(new HighStateService());
    }

    getText(): State {
        return 'low';
    }
}
