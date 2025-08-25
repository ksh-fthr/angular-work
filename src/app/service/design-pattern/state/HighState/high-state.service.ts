import { Injectable } from '@angular/core';
import { ContextService } from '../context/context.service';
import { OffStateService } from '../OffState/off-state.service';

@Injectable({
    providedIn: 'root',
})
export class HighStateService {
    upState(context: ContextService): void {
        context.changeState(new OffStateService());
    }

    getText(): string {
        return 'High';
    }
}
