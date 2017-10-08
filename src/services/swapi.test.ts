import {Observable} from 'rxjs/Observable'
import * as fetchMock from 'fetch-mock'
import {
  getResource,
  getPeople,
  getFilms,
  getPlanets,
  getSpecies,
  getStarships,
  getVehicles,
  Lookup,
  baseUrl
} from './swapi'

describe('//swapi.co/api', () => {

  afterEach(fetchMock.restore)

  describe('/', () => {
    it('should fetch resources', done => {
      fetchMock.get(baseUrl, JSON.stringify({ foo: 'bar' }))

      const api = getResource()

      api.subscribe(catchErrors(done, val => {
        expect(val).toEqual({ foo: 'bar' })
        done()
      }))
    })
  })

  describe('/:name/:id', () => {
    it('should get resource', done => {
      const numOfExpected = Object.keys(Lookup).length
      fetchMock.get(`glob:${baseUrl}*/`, JSON.stringify({ foo: 'bar' }), numOfExpected)

      Observable.forkJoin([
        getPeople(),
        getFilms(),
        getPlanets(),
        getSpecies(),
        getStarships(),
        getVehicles()
      ]).subscribe(catchErrors(done, received => {
        expect(received.length).toEqual(numOfExpected)
        done()
      }))
    })

    it('should get schema', done => {
      const numOfExpected = Object.keys(Lookup).length
      fetchMock.get(`glob:${baseUrl}*/schema`, JSON.stringify({ foo: 'bar' }), numOfExpected)

      Observable.forkJoin([
        getPeople('schema'),
        getFilms('schema'),
        getPlanets('schema'),
        getSpecies('schema'),
        getStarships('schema'),
        getVehicles('schema')
      ]).subscribe(catchErrors(done, received => {
        expect(received.length).toEqual(numOfExpected)
        done()
      }))
    })

    it('should get id as *string*', done => {
      const numOfExpected = Object.keys(Lookup).length
      fetchMock.get(`glob:${baseUrl}*/1`, JSON.stringify({ foo: 'bar' }), numOfExpected)

      Observable.forkJoin([
        getPeople('1'),
        getFilms('1'),
        getPlanets('1'),
        getSpecies('1'),
        getStarships('1'),
        getVehicles('1')
      ]).subscribe(catchErrors(done, received => {
        expect(received.length).toEqual(numOfExpected)
        done()
      }))
    })

    it('should get id as *number*', done => {
      const numOfExpected = Object.keys(Lookup).length
      fetchMock.get(`glob:${baseUrl}*/1`, JSON.stringify({ foo: 'bar' }), numOfExpected)

      Observable.forkJoin([
        getPeople(1),
        getFilms(1),
        getPlanets(1),
        getSpecies(1),
        getStarships(1),
        getVehicles(1)
      ]).subscribe(catchErrors(done, received => {
        expect(received.length).toEqual(numOfExpected)
        done()
      }))
    })
  })
})
