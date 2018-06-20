import { Observable } from 'rxjs'
import { ActionsObservable, combineEpics } from 'redux-observable'
import { getResource, SwapiBase } from '../services/swapi'
import { FETCH_RESOURCE } from '../constants'
import { FetchResourceAction, fetchResourceFulfilled } from '../actions'

// function searchStarshipsEpic(action$: ActionsObservable<any>) {
//   return action$.ofType(INCREMENT_ENTHUSIASM)
//     .do((action) => console.log(action))
//     .ignoreElements()
// }

// const resourceEpic = (action$: ActionsObservable<EnthusiasmAction>) => {
//     return action$.ofType(INCREMENT_ENTHUSIASM).switchMap(payload => {
//         console.log('resourceEpic:payload -->', payload)
//         return getResource().map(value => {
//             console.log('resourceEpic:getResource -->', value)
//             return fulfilledEnthusiasm()
//         })
//     })
// }

const resourceEpic = (action$: ActionsObservable<FetchResourceAction>) => {
  return action$.ofType(FETCH_RESOURCE).switchMap(payload => {
      console.log('resourceEpic:payload -->', payload)
      return getResource().map(value => {
          console.log('resourceEpic:getResource -->', value)
          return fetchResourceFulfilled(value)
      })
  })
}

export const rootEpic = combineEpics(resourceEpic)

/*
const topStories = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;
const url = (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

function fetchStoriesEpic(action$) {
  return action$.ofType(FETCH_STORIES)
    .switchMap(({payload}) => {
      return Observable.ajax.getJSON(topStories)
      // slice first 5 ids
        .map(ids => ids.slice(0, 5))
        // convert ids -> urls
        .map(ids => ids.map(url))
        // convert urls -> ajax
        .map(urls => urls.map(url => Observable.ajax.getJSON(url)))
        // execute 5 ajax requests
        .mergeMap(reqs => Observable.forkJoin(reqs))
        // results -> store
        .map(stories => fetchStoriesFulfilledAction(stories))
    })
}
*/
