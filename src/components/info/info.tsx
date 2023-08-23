import { usePhone } from '../../hooks/usePhone';

export function Info() {
  const { call } = usePhone();

  return <span className="message">{call ? 'Calling...' : 'Not Calling'}</span>;
}
