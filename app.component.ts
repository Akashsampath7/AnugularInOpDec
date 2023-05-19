import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParentChildDec';
  myInputMessage:string ="Update Input Message." 
  myInputMessage2:string="Update second input message."

  GetChildData(data){
    console.log(data);
  }

  ngOnInit(): void{

  }
  displayMessage(msg:string){
    this.myInputMessage=msg;
  }

  displayMessage2(msg2:string){
    this.myInputMessage2=msg2;
  }
}
  