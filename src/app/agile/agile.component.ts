import { Component, OnInit } from '@angular/core';
import { MyService } from '../service/info-service';

@Component({
  selector: 'app-agile',
  templateUrl: './agile.component.html',
  styleUrls: ['./agile.component.css']
})
export class AgileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Agile";
  btnclick(){
    // alert("Hello "+this.title)
    const service = new MyService();
    service.onclickbtn(this.title);
  }

}
