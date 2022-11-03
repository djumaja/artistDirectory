import { Component, OnInit } from '@angular/core';
import { Drawing } from '../models/drawing.interface';
import { Input } from '@angular/core';

@Component({
  selector: 'app-drawing-items',
  templateUrl: './drawing-items.component.html',
  inputs: ['drawing']
})
export class DrawingItemsComponent implements OnInit {

  @Input()
  drawing!: Drawing;
  constructor() { }

  ngOnInit(): void {
  }

}
