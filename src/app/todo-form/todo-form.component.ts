import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  newTodo: string = '';
  @Output() onNewTodo = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.onNewTodo.emit(this.newTodo);
    this.newTodo = '';
  }

}
