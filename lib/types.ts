import { Game } from "@/public/dist/main";

export type RemoveMethods<T> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K];
};

export type GameUi = Pick<Game, "pointWrapper">;