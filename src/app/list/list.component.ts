import { Component } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponenet {
  items: string[] = [];
  inputValue: string = '';

  addItem() {
    if (this.inputValue.trim() !== '') {
      this.items.push(this.inputValue);
      this.inputValue = '';
    }
  }
}