import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContextService } from 'src/app/service/design-pattern/state/context/context.service';

@Component({
    imports: [RouterModule],
    selector: 'app-state-pattern-client',
    templateUrl: './state-pattern-client.component.html',
    styleUrls: ['./state-pattern-client.component.css'],
})
export class StatePatternClientComponent implements OnInit {
    buttonName: string | null = null;

    constructor(private context: ContextService) {
        this.buttonName = this.context.getText();
    }

    ngOnInit(): void {}

    changeState(): void {
        this.context.up();
        this.buttonName = this.context.getText();
    }
}
