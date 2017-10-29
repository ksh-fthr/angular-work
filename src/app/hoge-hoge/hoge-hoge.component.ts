import { Component, OnInit, Input, OnChanges, DoCheck, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hoge-hoge',
  templateUrl: './hoge-hoge.component.html',
  styleUrls: ['./hoge-hoge.component.css']
})
export class HogeHogeComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  hogeInputValue: String;
  
  hogeInputValue2: String = "Initial Value";

  constructor() {
    console.log("[constructor] fired");
  }

  ngOnInit(): void {
    console.log("[ngOnInit] fired");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("[ngOnChanges] fired. hogeInputValue={" + this.hogeInputValue + "}" );
  }

  ngDoCheck(): void {
    console.log("[ngDoCheck] fired. hogeInputValue={" + this.hogeInputValue + "}" );
    console.log("[ngDoCheck] fired. hogeInputValue2={" + this.hogeInputValue2 + "}" );
  }
}
