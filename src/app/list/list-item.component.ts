import { Component } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  items: string[] = [];
  inputValue: string = '';

  addItem() {
    if (this.inputValue.trim() !== '') {
      this.items.push(this.inputValue);
      this.inputValue = '';
    }
  }
}