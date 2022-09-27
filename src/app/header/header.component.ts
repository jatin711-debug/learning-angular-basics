import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  buttonEnbaled: boolean = false;
  userInputTextValue:string = "";
  constructor() { 
    this.buttonEnbaled = true;
   }

  ngOnInit(): void {

  }

  handleSubmitButton(){
    this.buttonEnbaled = false;
    console.log(this.userInputTextValue);
    setTimeout(() => {
      this.buttonEnbaled = true;
    },1000);
  }
}
