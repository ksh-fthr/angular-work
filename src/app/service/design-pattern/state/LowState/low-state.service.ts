import { Injectable } from '@angular/core';
import { ContextService } from '../context/context.service';
import { HighStateService } from '../HighState/high-state.service';

@Injectable({
    providedIn: 'root',
})
export class LowStateService {
    upState(context: ContextService): void {
        context.changeState(new HighStateService());
    }

    getText(): string {
        return 'Low';
    }
}
