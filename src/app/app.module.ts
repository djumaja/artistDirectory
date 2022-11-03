import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DrawingItemsComponent } from './drawing-items/drawing-items.component';
import { SearchDrawingsPipe } from './search-drawings.pipe';
import { DrawingDetailsComponent } from './drawing-details/drawing-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DrawingItemsComponent,
    SearchDrawingsPipe,
    DrawingDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
