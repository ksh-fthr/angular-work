import { Component, OnInit } from '@angular/core';
import { TemplateDirective } from '../../directive/template.directive';

@Component({
  selector: 'app-use-directive',
  templateUrl: './use-directive.component.html',
  styleUrls: ['./use-directive.component.css']
})
export class UseDirectiveComponent implements OnInit {

  public inputData: string;
  constructor() { }

  ngOnInit() {
    this.inputData = 'Hello, Angular.';
  }

}
