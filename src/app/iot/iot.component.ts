import { Component, OnInit } from '@angular/core';
import { MyService } from '../service/info-service';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="IoT";
  btnclick(){
    // alert("Hello "+this.title)
    const service= new MyService();
    service.onclickbtn(this.title);
  }

}
