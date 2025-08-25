import { Injectable } from '@angular/core';
import { ContextService } from '../context/context.service';
import { OffStateService } from '../OffState/off-state.service';
import { State } from '../i-state';

@Injectable({
    providedIn: 'root',
})
export class HighStateService {
    upState(context: ContextService): void {
        context.changeState(new OffStateService());
    }

    getText(): State {
        return 'high';
    }
}
