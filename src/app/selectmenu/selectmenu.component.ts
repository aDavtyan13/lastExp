import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectmenu',
  templateUrl: './selectmenu.component.html',
  styleUrls: ['./selectmenu.component.css']
})
export class SelectmenuComponent implements OnInit {

  foods = [{
      value: 'steak-0', 
      viewValue: 'Bread, Cereal, Rice, and Pasta'
  },{
      value: 'pizza-1', 
      viewValue: 'Vegetables'
  },{
      value: 'tacos-2',
      viewValue: 'Fruit'
  },
  {
    value: 'tacos-3',
    viewValue: 'Milk,Yogurt and Cheese'
},{
  value: 'tacos-4',
  viewValue: 'Meat,Fish and Nuts'
}
];

  constructor() { }

  ngOnInit() {
  }

}
