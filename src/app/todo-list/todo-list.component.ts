import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public items = ITEMS;
  public newItem = "";
  constructor() { }

  ngOnInit() {
  }

  markCompleted(item) {
    if(item.completed) {
      item.completed = false;
    } else {
      item.completed = true;
    }
  }

  confirmDelete(item) {
    const delConfirmed = window.confirm("Are you sure to delete " + item.title + "?");
    if(delConfirmed) {
      this.deleteItem(item);
    }
  }

  deleteItem(item) {
    const index: number = this.items.indexOf(item);
    if(index !== -1) {
      this.items.splice(index, 1);
    }
  }

  addNewItem() {
    if(this.newItem === '') {
      return;
    }
    const item = {title: this.newItem, completed: false};
    // this.items.unshift(item);
    ITEMS.unshift(item);
    this.newItem = "";
  }
}
