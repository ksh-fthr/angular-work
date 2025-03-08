import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-content-child',
    templateUrl: './ng-content-child.component.html',
    styleUrls: ['./ng-content-child.component.css'],
    standalone: false
})
export class NgContentChildComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
