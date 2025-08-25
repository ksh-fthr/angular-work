import { ContextService } from './context/context.service';

export type State = 'off' | 'low' | 'high';
export interface IState {
    upState(context: ContextService): void;
    getText(): State;
}
