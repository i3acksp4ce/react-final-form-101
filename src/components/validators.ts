export const required = (value: string | number) =>
  value ? undefined : 'Required'

export const minValue = (min: number) => (value: number) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
