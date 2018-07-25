import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() item: Item;

  constructor(private taskService: TasksService) { }

  ngOnInit() {
  }
}
