import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Itodo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() getTodos!: Itodo[];

  @Output() emitEditTodo = new EventEmitter<Itodo>();
  @Output() emitRemoveId = new EventEmitter<Itodo>();

  constructor() { }

  ngOnInit(): void {
  }

  onEditTodo(todo: Itodo) {
    console.log(todo);
    this.emitEditTodo.emit(todo);
  }
onRemove(todo: Itodo) {
  console.log(todo);

  let getPassword = prompt("password");

  if (getPassword === "223344") {
    this.emitRemoveId.emit(todo);
  } else {
    alert("invalid password try again");
  }
}


   
  }
