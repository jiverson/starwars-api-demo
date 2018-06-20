import * as constants from '../constants'

export * from './resource.action';

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM
}

export interface FulfilledEnthusiasm {
  type: constants.FULFILLED_ENTHUSIASM
}

export type EnthusiasmAction =
  IncrementEnthusiasm |
  DecrementEnthusiasm |
  FulfilledEnthusiasm

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  }
}

export function fulfilledEnthusiasm(): FulfilledEnthusiasm {
  return {
    type: constants.FULFILLED_ENTHUSIASM
  }
}
