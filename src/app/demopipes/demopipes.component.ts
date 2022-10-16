import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipes',
  templateUrl: './demopipes.component.html',
  styleUrls: ['./demopipes.component.css']
})
export class DemopipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Busan"
  today=Date();
  number=30;
  user={
    id:100,
    name:"Steve",
    DOB:"13/10/1995",
    salary:30000


  }

}
