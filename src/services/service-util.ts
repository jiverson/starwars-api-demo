import {Observable} from 'rxjs'

const toJson = response => response.json()

export function toObservable<T>(fn: Promise<Response>): Observable<T> {
  return Observable.from(fn).mergeMap(toJson)
}
