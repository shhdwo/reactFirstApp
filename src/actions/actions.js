// @flow

type AddAction = { type: "ADD", value: number };
type SubtractAction = { type: "SUBTRACT", value: number };
type TermChangeAction = { type: "TERM_CHANGE", value: string };
type DataUpdateAction = { type: "DATA_UPDATE", value: [] };

export type Action =
  | AddAction
  | SubtractAction
  | TermChangeAction
  | DataUpdateAction;

export function counter_add(value: number): AddAction {
    return {
        type: "ADD",
        value: value
    }
}

export function counter_subtract(value: number): SubtractAction {
    return {
        type: "SUBTRACT",
        value: value
    }
}

export function term_change(value: string): TermChangeAction {
    return {
        type: "TERM_CHANGE",
        value: value
    }
}

export function data_update(value: []): DataUpdateAction {
    return {
        type: "DATA_UPDATE",
        value: value
    }
}