import { FetchResourceAction } from '../actions'
import { ResourceState } from '../models'
import { FETCH_RESOURCE, FETCH_RESOURCE_FULFILLED } from '../constants'

const initialState = {
    api: {}
}

export function resource(
    state: ResourceState = initialState,
    action: FetchResourceAction
): ResourceState {
    switch (action.type) {
        case FETCH_RESOURCE:
            return {
                ...state
            }
        case FETCH_RESOURCE_FULFILLED:
            console.log(action.payload, state)
            return {
                ...state,
                api: action.payload
            }
        default:
            return state
    }
}
