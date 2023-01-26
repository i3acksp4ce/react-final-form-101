export const required = (value: string | number) => {
  if (!value) return 'Required'
  return value ? undefined : 'Required'
}

export const minValue = (min: number) => (value: any) => {
  return isNaN(value) || value >= min
    ? undefined
    : `Should be greater than ${min}`
}

export const mustBeNumber = (value: any) => {
  return isNaN(value) ? 'Must be a number' : undefined
}

export const minChar = (min: number) => (value: any) => {
  if (!value) return `Must be ${min} characters or more`

  if (value.length < min) return `Must be ${min} characters or more`
}

export const composeValidators =
  (...validators: any) =>
  (value: any) =>
    validators.reduce(
      (error: any, validator: any) => error || validator(value),
      undefined
    )
