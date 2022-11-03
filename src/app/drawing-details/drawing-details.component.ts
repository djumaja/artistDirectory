import { Component, OnInit,Input } from '@angular/core';
import { Drawing } from '../models/drawing.interface';

@Component({
  selector: 'app-drawing-details',
  templateUrl: './drawing-details.component.html',
  inputs:['drawing']
})
export class DrawingDetailsComponent implements OnInit {

  @Input()
  drawing!: Drawing;
  constructor() { }

  ngOnInit(): void {
  }

}
