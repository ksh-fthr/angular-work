import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-content-parent',
    templateUrl: './ng-content-parent.component.html',
    styleUrls: ['./ng-content-parent.component.css'],
    standalone: false
})
export class NgContentParentComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
