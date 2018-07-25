import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Item } from '../item';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  public items : Item[];
  public newItem = "";
  public editLabel = "Edit";
  public item: Item;
  closeResult: string;
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.getItems();
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
    const item = {title: this.newItem, completed: false, details: ""};
    this.items.unshift(item);
    this.newItem = "";
  }

  getItems(): void {
    this.tasksService.getTasks().subscribe(items => this.items = items);
  }

  edit(event, item): void {
    if(event.target.innerHTML != "Update") {
      event.target.innerHTML = "Update";
      this.item = item;
    } else {
      this.tasksService.updateTask(this.item);
      event.target.innerHTML = "Edit";
      this.item = null;
    }
  }
}
