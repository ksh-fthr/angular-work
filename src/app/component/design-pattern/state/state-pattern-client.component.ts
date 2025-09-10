import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CaseTransformPipe } from 'src/app/pipe/case-transform.pipe';
import { ContextService } from 'src/app/service/design-pattern/state/context/context.service';
import { State } from 'src/app/service/design-pattern/state/i-state';

@Component({
    imports: [CommonModule, CaseTransformPipe],
    selector: 'app-state-pattern-client',
    templateUrl: './state-pattern-client.component.html',
    styleUrls: ['../../../style/common.css', './state-pattern-client.component.css'],
})
export class StatePatternClientComponent implements OnInit {
    title = 'Stateパターンの検証';
    state: State | null = null;

    constructor(private context: ContextService) {
        this.state = this.context.getText();
    }

    ngOnInit(): void {}

    changeState(): void {
        this.context.up();
        this.state = this.context.getText();
    }
}
