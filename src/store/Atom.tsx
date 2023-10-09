import { atom, useAtom } from "jotai";

export const quizProgressAtom = atom<number>(0);

export const incrementQuizProgress = atom(null, (get, set) => {
  const currentProgress = get(quizProgressAtom);
  set(quizProgressAtom, currentProgress + 1);
});
