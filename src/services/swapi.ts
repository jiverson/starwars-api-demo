import { Observable } from 'rxjs/Observable'
import { toObservable } from './service-util'
import { validateAgainstDefault } from './validation'

export interface SwapiBase {
    (id?: string | number | 'schema'): Observable<any>
}

export interface SwapiResource {
    (): Observable<any>
}

export const baseUrl = 'https://swapi.co/api/'

export enum Lookup {
    FILMS = 'films',
    PEOPLE = 'people',
    PLANETS = 'planets',
    SPECIES = 'species',
    STARSHIPS = 'starships',
    VEHICLES = 'vehicles'
}

export const getResource: SwapiResource = () => toObservable(fetch(baseUrl))
// export const getResource: SwapiResource = () => Observable.ajax.getJSON(baseUrl)
export const getFilms: SwapiBase = callApi(Lookup.FILMS)
export const getPeople: SwapiBase = callApi(Lookup.PEOPLE)
export const getPlanets: SwapiBase = callApi(Lookup.PLANETS)
export const getSpecies: SwapiBase = callApi(Lookup.SPECIES)
export const getStarships: SwapiBase = callApi(Lookup.STARSHIPS)
export const getVehicles: SwapiBase = callApi(Lookup.VEHICLES)

// function callApi(name: string) {
//   const validateId = id => validateAgainstDefault(id, 'schema')
//   return (id = '') => Observable.ajax.getJSON(`${baseUrl}${name}/${validateId(id)}`)
// }

function callApi(name: string) {
    const validateId = id => validateAgainstDefault(id, 'schema')
    return (id = '') =>
        toObservable(fetch(`${baseUrl}${name}/${validateId(id)}`))
}
