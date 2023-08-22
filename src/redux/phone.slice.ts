import { createSlice } from '@reduxjs/toolkit';

export type PhoneState = {
  numberPhone: string;
  call: boolean;
};
/*linea 4 describo la estrucutra del estado
 tendremos un estado con numeros y otro con llamada si o no.

*/

const initialState: PhoneState = {
  numberPhone: '',
  call: false,
};

/*
Linea 14 se crea un ¡OBJETO!  con el estado inicial del teléfono
que será sin números y colgado, fijate que bebe del tipado de la 
línea 4.
*/

const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {
    giveNumbers: (state, { payload }: { payload: string }) => {
      state.numberPhone = payload;
    },
    call: (state, { payload }: { payload: boolean }) => {
      state.call = payload;
    },
  },
});

/* En create PHONESLICE se crean 3 PROPIEDADES.
  -name se nombra 
  -InititalState me dará el estado inicial
  -reducers Aki es donde tengo las funciones reductoras.
    - giveNumbers:
        - state me da el estado actual, en principio ninguno
        -y luego cuando se dispara la acción.
*/

export const actions = phoneSlice.actions;
export default phoneSlice.reducer;

/* 
slice

store

llamda del provider desde main

luego el hook

el repo...
*/
