import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

export function Actions() {
  const {
    phoneContext: { numbersDisplay: displayState, callPhone, callState },
  } = useContext(AppContext);

  return (
    <div className="actions">
      <span className="number">
        {displayState && displayState.map((item) => item).join('')}
      </span>

      {displayState.length < 9 && !callState ? (
        <>
          <a onClick={callPhone} href="#" className="call ">
            Call
          </a>
          <a href="#" id="colgar" className="off hang">
            Hang
          </a>
        </>
      ) : (
        <>
          <a onClick={callPhone} href="#" className={'call active'}>
            Call
          </a>
          <a href="#" id="colgar" className="off hang active ">
            Hang
          </a>
        </>
      )}
    </div>
  );
}
