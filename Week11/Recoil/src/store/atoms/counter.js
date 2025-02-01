// store/atoms/counter.js
import { atom } from 'recoil';

export const counterAtom = atom({
  key: 'counterAtom', // unique ID for this atom
  default: 0,         // default value
});
