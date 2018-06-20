import * as constants from '../constants'

export interface FetchResource {
    type: constants.FETCH_RESOURCE
}

export interface FetchResourceFulfilled {
    type: constants.FETCH_RESOURCE_FULFILLED
    payload: any
}

export type FetchResourceAction = FetchResource | FetchResourceFulfilled

export function fetchResource(): FetchResource {
    return {
        type: constants.FETCH_RESOURCE
    }
}

export function fetchResourceFulfilled(data: any): FetchResourceFulfilled {
    return {
        type: constants.FETCH_RESOURCE_FULFILLED,
        payload: data
    }
}
