
export type State<TState> = (TState[keyof TState] & number) | string;


