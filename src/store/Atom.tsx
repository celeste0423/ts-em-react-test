import { atom, useAtom } from "jotai";

export const quizProgressAtom = atom<Array<[number, boolean]>>([]);
