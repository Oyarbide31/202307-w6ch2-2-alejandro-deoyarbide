import { dataKeys } from '../../data/data_key';
import { Key } from '../key/key';

export function Keyboard() {
  return (
    <>
      <div className="keyboard-container">
        <ol className="keyboard">
          {dataKeys.map((item, index) => (
            <Key key={index} keyNumber={item}></Key>
          ))}
        </ol>
      </div>
    </>
  );
}
