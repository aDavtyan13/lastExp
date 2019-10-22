import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data.interface'

@Component({
  selector: 'app-fourdiv',
  templateUrl: './fourdiv.component.html',
  styleUrls: ['./fourdiv.component.css']
})
export class FourdivComponent implements OnInit {

  @Input() data: Data;

  constructor() { }

  ngOnInit() {
  }

}
