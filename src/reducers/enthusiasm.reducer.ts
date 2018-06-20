import { EnthusiasmAction } from '../actions'
import { EnthusiasmState } from '../models'
import {
    INCREMENT_ENTHUSIASM,
    DECREMENT_ENTHUSIASM,
    FULFILLED_ENTHUSIASM
} from '../constants'

const initialState = {
    level: 1,
    languageName: 'TypeScript'
}

export function enthusiam(
    state: EnthusiasmState = initialState,
    { type }: EnthusiasmAction
): EnthusiasmState {
    switch (type) {
        case INCREMENT_ENTHUSIASM:
            return {
                ...state,
                level: state.level + 1
            }
        case DECREMENT_ENTHUSIASM:
            return {
                ...state,
                level: Math.max(1, state.level - 1)
            }
        case FULFILLED_ENTHUSIASM:
            return {
                ...state,
                level: 9
            }
        default:
            return state
    }
}
