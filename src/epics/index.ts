import {Observable} from 'rxjs'
import {combineEpics} from 'redux-observable';
import {INCREMENT_ENTHUSIASM} from '../constants'

function searchStarshipsEpic(action$: Observable<any>) {
  return action$
    .do((action) => console.log(action))
    .ignoreElements();
}

export const rootEpic = combineEpics(searchStarshipsEpic);
