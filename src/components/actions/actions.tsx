import { usePhone } from '../../hooks/usePhone';

export function Actions() {
  const { number, call, callToNumberPhone, hangUp } = usePhone();

  return (
    <div className="actions">
      <span className="number">{number}</span>
      {number.length < 9 && !call ? (
        <a onClick={callToNumberPhone} href="#" className="call ">
          Call
        </a>
      ) : (
        <>
          <a onClick={callToNumberPhone} href="#" className={'call active'}>
            Call
          </a>
          <a href="#" id="colgar" className="hang active" onClick={hangUp}>
            Hang
          </a>
        </>
      )}
    </div>
  );
}
