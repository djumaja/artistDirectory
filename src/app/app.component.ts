import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drawing } from './models/drawing.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  query: string;
  drawings: Drawing[]=[];
  currentDrawing!: Drawing;

  showDrawing(item: Drawing) {
    this.query = item.name;
    //item.highlight = !item.highlight;
    this.currentDrawing = item;
  }

  constructor( private http: HttpClient ) {
    this.query = '';
  }

  ngOnInit(): void {
    this.http.get<Drawing[]>('../assets/data.json').subscribe( data => {
      this.drawings = data;
      console.log(this.drawings);
      console.log("'./assets/images/'"+this.drawings[0].img);
      
    })
  }

}