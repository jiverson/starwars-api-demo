import { Dispatch as ReduxDispatch } from 'redux'

export type Dispatch = ReduxDispatch<AppState>

export interface EnthusiasmState {
    languageName: string
    level: number
}

export interface ResourceState {
    api: any
}

export interface AppState {
    enthusiasm: EnthusiasmState
    resource: ResourceState
}

