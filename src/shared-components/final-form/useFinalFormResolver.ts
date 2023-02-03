/**
 * https://gist.github.com/manzoorwanijk/5993a520f2ac7890c3b46f70f6818e0a
 * https://gist.github.com/nfantone/9ab600760db8774ab4873cb1a3a22f26
 *
 */
import { setIn } from 'final-form'
import { useMemo } from 'react'
import { AnyObjectSchema, ValidationError } from 'yup'

/**
 * Sets the `innerError.message` in an `errors` object at the key
 * defined by `innerError.path`.
 */
const setInError = (
  errors: Record<string, string>,
  innerError: ValidationError
) => {
  return setIn(errors, innerError.path ?? '', innerError.message)
}

/**
 * Empty object map with no prototype. Used as default
 * value for reducing the `err.inner` array of errors
 * from a `yup~ValidationError`.
 */
const emptyObj: {} = Object.create(null)

/**
 * Takes a `yup` validation schema and returns a function that expects
 * a map of values to validate. If the validation passes, the function resolves to `undefined`
 * (signalling that the values are valid). If the validation doesn't pass, it resolves
 * to a map of invalid field names to errors.
 */

export function makeValidate<TValue = Record<string, unknown>>(
  schema: AnyObjectSchema
): (val: TValue) => Promise<undefined | Record<string, string>> {
  return async function validate(values: TValue) {
    try {
      await schema.validate(values, { abortEarly: false })
    } catch (err) {
      return (err as ValidationError).inner.reduce(setInError, emptyObj)
    }
  }
}

export function useFinalFormResolver<TValue = Record<string, unknown>>(
  schema: AnyObjectSchema
) {
  const validate = useMemo(() => makeValidate<TValue>(schema), [schema])
  return validate
}
