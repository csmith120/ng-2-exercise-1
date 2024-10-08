import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: { value: string, crossedOut: boolean }[] = [];
  inputValue: string = '';
  removeValue: string = '';

  ngOnInit() {
    this.loadItems();
  }

  addItem() {
    if (this.inputValue.trim() !== '') {
      this.items.push({ value: this.inputValue, crossedOut: false });
      this.inputValue = '';
      this.saveItems();
    }
  }

  removeItem() {
    this.items = this.items.filter(item => item.value !== this.removeValue);
    this.removeValue = '';
    this.saveItems();
  }

  toggleItem(index: number) {
    const item = this.items[index];
    item.crossedOut = !item.crossedOut;
    if (item.crossedOut) {
      this.items.splice(index, 1);
    }
    this.saveItems();
  }

  saveItems() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  loadItems() {
    const savedItems = localStorage.getItem('items');
    if (savedItems) {
      this.items = JSON.parse(savedItems);
    }
  }
}
