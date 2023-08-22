import { useState } from 'react';
let numbersDisplay: string[] = [];
export function usePhone() {
  const [displayState, setDisplayState] = useState<string[]>([]);
  const [callState, setcallState] = useState<boolean>(false);
  const addNumberToDisplay = (num: string) => {
    if (num === 'delete') {
      numbersDisplay = [];
      num = '';
    }
    if (numbersDisplay.length === 9) return;
    numbersDisplay.push(num);
    const newNumbers = [...numbersDisplay];
    setDisplayState(newNumbers);
  };
  console.log(callState);
  const callPhone = () => {
    setcallState(true);
    console.log(callState);
  };
  return {
    numbersDisplay,
    displayState,
    setDisplayState,
    addNumberToDisplay,
    callPhone,
    callState,
  };
}
