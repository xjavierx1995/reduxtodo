import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear } from './todo.actions';

export const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Hacer algo'),
    new Todo('Ver curso de Fernando'),
    new Todo('No se'),
];

export const todoReducer = createReducer(
    estadoInicial,
    on(crear, (state, {texto}) => [...state, new Todo(texto)]),

);