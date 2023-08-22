import { AppContextProvider } from '../../context/app.context.provider';
import { Actions } from '../actions/actions';
import { Info } from '../info/info';
import { Keyboard } from '../keyboard/keyboard';

function Phone() {
  return (
    <>
      <AppContextProvider>
        <Info></Info>
        <main className="phone">
          <Keyboard></Keyboard>
          <Actions></Actions>
        </main>
      </AppContextProvider>
    </>
  );
}

export default Phone;
