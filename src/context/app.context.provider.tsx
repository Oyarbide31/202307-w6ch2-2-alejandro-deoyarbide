import { ReactNode } from 'react';
import { usePhone } from '../hooks/use_phone';
import { AppContext, AppContextStructure } from './app.context';

type Props = {
  children: ReactNode;
};
export function AppContextProvider({ children }: Props) {
  const context: AppContextStructure = {
    phoneContext: usePhone(),
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
