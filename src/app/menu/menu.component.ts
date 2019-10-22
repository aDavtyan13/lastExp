import { Component, OnInit } from '@angular/core';
// import {Item} from '../item.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items = [{
    icon: 'desktop_windows',
    name: 'Dashboard',
    active: false
  },{
    icon: 'add_circle_outline',
    name: 'Forms',
    active: false
  },
  {
    icon: 'widgets',
    name: 'UI features',
    active: false
  },{
    icon: 'select_all',
    name: 'Tables',
    active: false
  },{
    icon: 'location_searching',
    name: 'Charts',
    active: false
  },{
    icon: 'scatter_plot',
    name: 'sample pages',
    active: false
  }
];

  constructor() { }

  ngOnInit() {
  }

}
