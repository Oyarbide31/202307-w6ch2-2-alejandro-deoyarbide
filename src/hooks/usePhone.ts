import { useDispatch, useSelector } from 'react-redux';

import { callSelector, numberPhoneSelector } from '../redux/phone.selectors';

import { actions } from '../redux/phone.slice';

/*
Hook personalizado 
  que maneja la lógica de la app
Aquí se va a construir una única función que va a devolverme:
  - el estado
  -el estado de carga
  -Las funciones qué hará mi componente.
*/

export function usePhone() {
  const number = useSelector(numberPhoneSelector); //state.phone.numberPhone // '123'
  const call = useSelector(callSelector);
  const dispatch = useDispatch();

  const checkIfPhoneIsValid = (numberPhone: string) => numberPhone.length <= 9;

  const setNewNumberPhone = (numberPhone: string) => {
    //state.phone.numberPhone = numberPhone
    dispatch(actions.giveNumbers(numberPhone));
  };

  const callToNumberPhone = () => {
    if (!checkIfPhoneIsValid(number)) {
      return;
    }
    // state.phone.call = true
    dispatch(actions.call(true));
  };

  const hangUp = () => {
    // Colgar el teléfono
    // state.phone.call = false
    dispatch(actions.call(false));
  };

  return {
    number,
    call,
    checkIfPhoneIsValid,
    setNewNumberPhone,
    callToNumberPhone,
    hangUp,
  };
}

/* Telefono.tsx (Componente)

  const Telefono: React.FC = () => {

    const {setNewNumberPhone, checkIfPhoneIsValid, number} = usePhone();

    const handlePhoneType = (event) => {
      if(checkIfPhoneIsValid(event.target.value)) {
        setNewNumberPhone(event.target.value)
      }
    }

    return <>
      <p>El número es: {number}</p>
      <input type="number" placeholder="Teléfono" onChange={handlePhoneType} />
    </>;
  }
*/
