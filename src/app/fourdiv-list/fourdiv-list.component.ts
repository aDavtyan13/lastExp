import { Component, OnInit } from '@angular/core';
import { Data } from '../data.interface';

@Component({
  selector: 'app-fourdiv-list',
  templateUrl: './fourdiv-list.component.html',
  styleUrls: ['./fourdiv-list.component.css']
})
export class FourdivListComponent implements OnInit {

  data: Data[] = [{
    icon:'supervisor_account',
    number: 135,
    name: 'new projects',
    color: 'red'
  },{
    icon:'lock',
    number: 7783,
    name: 'Total Sales',
    color: 'green'
  },{
    icon:'report_problem',
    number: 569,
    name: 'Open Tickets',
    color: 'yellow'
  },{
    icon:'store',
    number: 5785,
    name: 'New Visitors',
    color: 'blue'
  }
]

  constructor() { }

  ngOnInit() {
  }

}
