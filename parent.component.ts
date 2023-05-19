import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

  @Input() myinputMsg:string; 
  @Input() myinputMsg2:string;
  
  public price: any;
  onChange(value){
    this.price=value;
  }

  public price2: any;
  onChange2(value2){
    this.price2=value2;
  }

  constructor(){

  }
  ngOnInit() {  
    console.log(this.myinputMsg);  
    console.log(this.myinputMsg2);
    } 
  
}
