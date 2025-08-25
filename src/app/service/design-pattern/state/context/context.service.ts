import { Injectable } from '@angular/core';
import { IState, State } from '../i-state';
import { OffStateService } from '../OffState/off-state.service';

@Injectable({
    providedIn: 'root',
})
export class ContextService {
    private state: IState = new OffStateService();

    up(): void {
        this.state.upState(this);
    }

    changeState(state: IState): void {
        this.state = state;
    }

    getText(): State {
        return this.state.getText();
    }
}
