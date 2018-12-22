import { Component } from '@angular/core';


/**
 * Generated class for the ListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent {

  text: string;
  public lists = [];

  constructor() {
    console.log('Hello ListComponent Component');
    this.text = 'Hello World';
    for(var i = 0; i < 10; i++){
      this.lists.push("Num"+i+"条数据");
    }
  }

}
