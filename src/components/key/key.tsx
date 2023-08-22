import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

type Props = {
  keyNumber: string;
};
export function Key({ keyNumber }: Props) {
  const {
    phoneContext: { addNumberToDisplay },
  } = useContext(AppContext);

  return (
    <>
      {keyNumber !== 'delete' ? (
        <li>
          <button onClick={() => addNumberToDisplay(keyNumber)} className="key">
            {keyNumber}
          </button>
        </li>
      ) : (
        <li>
          <button
            onClick={() => addNumberToDisplay(keyNumber)}
            className={'key big'}
          >
            {keyNumber}
          </button>
        </li>
      )}
    </>
  );
}
