import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Itodo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  isInEditMode:boolean= false

@ViewChild('todoItem')todoItem!:ElementRef
@ViewChild('isCompleted')isCompleted!:ElementRef


@Input() getEditobj!:Itodo
@Output() emitNewTodo: EventEmitter<Itodo> =new EventEmitter<Itodo>()
@Output() emitUpdateTodo: EventEmitter<Itodo> =new EventEmitter<Itodo>()

  constructor() { }


ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  if(!!changes['getEditobj'].currentValue){
    this.isInEditMode=true
    this.todoItem.nativeElement.value=this.getEditobj.todoItem;
    this.isCompleted.nativeElement.value=this.getEditobj.isCompleted;
  }
  
}

  ngOnInit(): void {
  }


  ontodoadd(){
    let NewTodo:Itodo={
      todoItem:this.todoItem.nativeElement.value,
      isCompleted:this.isCompleted.nativeElement.value=='true'? true:false,
     todoId:Date.now.toString()
    }
    
     console.log(NewTodo);
     this.emitNewTodo.emit(NewTodo)
     this.todoItem.nativeElement.value=''
     this.isCompleted.nativeElement.value='true'

     
  }

  onUpdateTodo(){
    let UpdateObj:Itodo={
   todoItem : this.todoItem.nativeElement.value,
  isCompleted: this.isCompleted.nativeElement.value,
  todoId : this.getEditobj.todoId
    }

    console.log(UpdateObj);
    this.emitUpdateTodo.emit(UpdateObj)
    this.todoItem.nativeElement.value=''
    this.isCompleted.nativeElement.value=''
     this.isInEditMode=false
    
  

  }

  }
 

