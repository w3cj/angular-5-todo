import { Component, OnInit } from '@angular/core';

import TodoItem from './TodoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: TodoItem[] = [];

  ngOnInit() {
  }

  onNewTodo(newTodo: string) {
    this.todos.push({
      title: newTodo,
      isDone: false
    });
  }

  onRemoveTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
