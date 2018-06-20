import { combineReducers } from 'redux'
import { AppState } from '../models'
import { resource } from './resource.reducer'
import { enthusiam } from './enthusiasm.reducer'

export default combineReducers<AppState>({
    enthusiam,
    resource
})
