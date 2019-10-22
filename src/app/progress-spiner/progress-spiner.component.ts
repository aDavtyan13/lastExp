import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spiner',
  templateUrl: './progress-spiner.component.html',
  styleUrls: ['./progress-spiner.component.css']
})
export class ProgressSpinerComponent implements OnInit {
  
  color = 'warn';
  mode = 'determinate';
  value = 60;

  constructor() { }

  ngOnInit() {
  }

}
