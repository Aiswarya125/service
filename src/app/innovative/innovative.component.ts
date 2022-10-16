import { Component, OnInit } from '@angular/core';
import { MyService } from '../service/info-service';

@Component({
  selector: 'app-innovative',
  templateUrl: './innovative.component.html',
  styleUrls: ['./innovative.component.css']
})
export class InnovativeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Innovative";
  btnclick(){
    // alert("Hello "+this.title)
    const service = new MyService();
    service.onclickbtn(this.title);
  }

}
