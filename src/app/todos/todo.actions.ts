import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] Crear Todo',
    props<{texto: string}>()//para recibir una variable
);
