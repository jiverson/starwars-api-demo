import {defaultTo, __, gt} from 'ramda'

const emptyStringDefault = defaultTo('')
const gtThanZero = gt(__, 0)

export function defaultToEmptyString(value: any): number | string {
  const numericValue = emptyStringDefault(Number.parseInt(value, 10))

  return gtThanZero(numericValue as number) ? numericValue : ''
}

export function validateAgainstDefault(id: any, useDefault?: number | string) {
  return id === useDefault ? useDefault : defaultToEmptyString(id)
}
