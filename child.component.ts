import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{

  constructor() {

  }
  @Output() public newPrice = new EventEmitter<any>();
  public price:any; ngOnInit() {} onChange(value) {
    this.newPrice.emit(value); 
  }

  @Output() public newPrice2 = new EventEmitter<any>();
  public price2:any; ngOnInit2() {} onChange2(value2) {
    this.newPrice2.emit(value2); 
  }
}
