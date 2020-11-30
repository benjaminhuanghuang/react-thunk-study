// Type name
export const AGE_UP = "AGE_UP";
export const AGE_DOWN = "AGE_DOWN";
export const AGE_LOADING = "AGE_LOADING";

// Dispatch types
export interface AgeUp {
  type: typeof AGE_UP;
  payload: number;
}

export interface AgeDown {
  type: typeof AGE_DOWN;
  payload: number;
}

export interface AgeLoading {
  type: typeof AGE_LOADING;
}

export type AgeDispatchTypes = AgeUp | AgeDown | AgeLoading;
