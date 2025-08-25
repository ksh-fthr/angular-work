import { ContextService } from './context/context.service';

export interface IState {
    upState(context: ContextService): void;
    getText(): string;
}
