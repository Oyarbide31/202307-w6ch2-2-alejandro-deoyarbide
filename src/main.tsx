import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Phone from './components/phone/Phone.tsx';
import { appStore } from './store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Phone />
    </Provider>
  </React.StrictMode>
);

/*
Lína 8 utiliza el componmente provider para embolber la app y proporcionar 
el store del reduz OJO a todos los componentes! claro, porque estan envueltos.

y en la línea 10 renderiza el  componente, ya mediatizado
*/
