import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, crear, editar, toggle, toggleAll } from './todo.actions';

export const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Hacer algo'),
    new Todo('Ver curso de Fernando'),
    new Todo('No se'),
];

export const todoReducer = createReducer(estadoInicial,

    on(borrar, (state, {id}) => state.filter(todo => todo.id !== id)  ),
    on(crear, (state, {texto}) => [...state, new Todo(texto)]),
    on(toggle, (state, { id }) => {
        
        return state.map( todo =>{
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            }else{
                return todo;
            }
        } )    
        
    }),

    on(toggleAll, (state, { completado }) => {
        
        return state.map( todo =>{
            return {
                ...todo,
                completado: completado
            }
        })    
        
    }),

    on(editar, (state, { id, texto }) => {
        
        return state.map( todo =>{
            if (todo.id === id) {
                return {
                    ...todo,
                    texto: texto
                }
            }else{
                return todo;
            }
        } )    
        
    }),
);