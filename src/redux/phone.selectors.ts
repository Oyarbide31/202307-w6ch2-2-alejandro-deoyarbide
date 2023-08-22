import { RootState } from '../store';

export const phoneStateSelector = (state: RootState) => state.phone;

export const numberPhoneSelector = (state: RootState) =>
  state.phone.numberPhone;

export const callSelector = (state: RootState) => state.phone.call;
