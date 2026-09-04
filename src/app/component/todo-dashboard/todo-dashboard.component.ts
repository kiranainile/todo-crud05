import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Itodo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {
 
   editTodoobj!: Itodo;

  todosArr:Array<Itodo> =[
{
  todoItem: 'Complete Assignment',
  todoId: '301',
  isCompleted: true
},
{
  todoItem: 'Go for a Morning Walk',
  todoId: '302',
  isCompleted: false
},
{
  todoItem: 'Read JavaScript Concepts',
  todoId: '303',
  isCompleted: true
},
{
  todoItem: 'Build Login Page',
  todoId: '304',
  isCompleted: false
},
{
  todoItem: 'Push Project to GitHub',
  todoId: '305',
  isCompleted: true
}



  ]

  constructor(
    private _SnackBar:MatSnackBar
    
  ) { }

  ngOnInit(): void {
    //Api call to fetch TODOS from DB
  }
  getNewTodos(todo:Itodo){
    this.todosArr.push(todo);
    this._SnackBar.open(` New Todo Added Successfully`, 'Close', {
      duration: 3000,
       horizontalPosition: 'center',
       verticalPosition: 'top'
      
    });
  }
  getUpdateTodo(todo:Itodo){
    let getIndex=this.todosArr.findIndex(t=>t.todoId==todo.todoId)
    
    if (getIndex > -1) {
     this.todosArr[getIndex] = todo;
    }
    this._SnackBar.open(`The Todo is updated Successfully...!!`,'close',{
     horizontalPosition: 'center',
       verticalPosition: 'top'
    });

  }
getEditTodo(todo:Itodo){
  this.editTodoobj =todo;

}
  getRemovedId(todo: Itodo) {
    let getIndex = this.todosArr.findIndex(t => t.todoId === todo.todoId);

    if (getIndex > -1) {
      this.todosArr.splice(getIndex, 1);
    }
    this._SnackBar.open(`The Todo is deleted Successfully...!!`,'close',{
     horizontalPosition: 'center',
       verticalPosition: 'top'
    });

}
}
