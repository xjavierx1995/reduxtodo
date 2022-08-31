import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  @ViewChild('inputFisico') txtInputFisico: ElementRef

  chkCompletado: FormControl
  txtInput: FormControl

  editando: boolean = false

  constructor() { }

  ngOnInit(): void {

    this.todo = {...this.todo}//TODO: se coloca porque no se actualiza sin esto
    this.chkCompletado = new FormControl(this.todo.completado)
    this.txtInput = new FormControl(this.todo.texto, Validators.required)
  }

  editar(){
    this.editando = true;

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    },1);
  }

  terminarEdicion(){
    this.editando = false
  }

}
