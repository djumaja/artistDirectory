import { Pipe, PipeTransform } from '@angular/core';
import { Drawing } from './models/drawing.interface';

@Pipe({
  name: 'searchDrawings'
})
export class SearchDrawingsPipe implements PipeTransform {

  transform(pipeData: Drawing[], pipeModifier: string): any {
    return pipeData.filter(eachItem => {
      return (
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['description'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }
}