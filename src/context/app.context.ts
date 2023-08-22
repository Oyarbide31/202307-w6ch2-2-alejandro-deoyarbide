import { createContext } from 'react';
import { usePhone } from '../hooks/use_phone';

export type AppContextStructure = {
  phoneContext: ReturnType<typeof usePhone>;
};

export const AppContext = createContext<AppContextStructure>(
  {} as AppContextStructure
);
