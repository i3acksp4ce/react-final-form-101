import { object, setLocale, string } from 'yup'

setLocale({
  mixed: {
    required: 'This field is required',
  },
  string: {
    min: 'This field at least ${min}',
  },
})

export const yupFormValidateSchema = object().shape({
  inputA: string().required().min(3),
})
