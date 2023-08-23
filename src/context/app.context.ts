import { createContext } from 'react';
import { usePhone } from '../hooks/usePhone';

export type AppContextStructure = {
  phoneContext: ReturnType<typeof usePhone>;
};

export const AppContext = createContext<AppContextStructure>(
  {} as AppContextStructure
);
