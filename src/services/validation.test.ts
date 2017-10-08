import {Observable} from 'rxjs/Observable'
import {defaultToEmptyString, validateAgainstDefault} from './validation'

describe('defaultToEmptyString', () => {

  it('should be number if integer is gt zero', () => {
    [1, '1', 1.1].forEach(x => expect(defaultToEmptyString(x)).toEqual(1));
  })

  it('should be emptry string int is not passed', () => {
    ['foo', null, undefined, false, 0, -1, .1].forEach(x => expect(defaultToEmptyString(x)).toEqual(''));
  })
})

describe('validateAgainstDefault', () => {

  it('should use default to validate', () => {
    const received = validateAgainstDefault('schema', 'schema')

    expect(received).toBe('schema')
  })

  it('should pass through to default empty', () => {
    [1, '1', 1.1].forEach(x => expect(defaultToEmptyString(x)).toEqual(1));
    ['foo', null, undefined, false, 0, -1, .1].forEach(x => expect(defaultToEmptyString(x)).toEqual(''));
  })
})
