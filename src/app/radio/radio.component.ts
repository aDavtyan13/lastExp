import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  radios = ['Default Radio 1','Default Radio 2'];
  customRadios = ['Custom Radio 1','Custom Radio 2'];

  constructor() { }

  ngOnInit() {
  }

}
