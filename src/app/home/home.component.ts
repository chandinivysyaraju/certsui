import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 show:boolean=true;
 a:string;
 b:string;
 show1:boolean=true;
  constructor() { }

  ngOnInit() {


  }
  setflag(a){
    console.log(a)
    console.log("clicked");
    if(a=='issuer'){
      console.log("issuer")
      this.show=true
    }
    else{
      console.log("auth")

    this.show=false;
    }
 
console.log(this.show)

  }


  showpage(b){
      if(b=='initial'){
        this.show1=true;
      }
      else{
        this.show1=false;
      }
  }
}
