import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    imports: [RouterModule],
    selector: 'app-state-pattern-client',
    templateUrl: './state-pattern-client.component.html',
    styleUrls: ['./state-pattern-client.component.css'],
})
export class StatePatternClientComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
