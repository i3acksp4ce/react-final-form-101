import { useEffect } from 'react'
import { useFormState } from 'react-final-form'

interface IFormValues {
  inputA: string
}

export function handleSubmit(values: IFormValues): void {
  console.log('values', values)
}

export const useSampleUseFormState = () => {
  const formState = useFormState<IFormValues>()

  useEffect(() => {
    console.log('formState.values', formState.values)
  }, [formState.values])

  return { formState }
}
