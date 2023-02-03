import { Button } from '@/shared-components/Button'
import { Card } from '@/shared-components/Card'
import { InputAdapter } from '@/shared-components/final-form/InputAdapter'
import { useEffect } from 'react'
import { Form, Field, useFormState, FormSpy } from 'react-final-form'
import { handleSubmit, useSampleUseFormState } from './viewModel'

interface IFormValues {
  inputA: string
  inputB: string
}

export const Test = () => {
  const {
    formState: { values },
  } = useSampleUseFormState()

  useEffect(() => {
    console.log(values)
  }, [values])
  return (
    <>
      <Field label="input A" name="inputA" component={InputAdapter} />
      <Field label="input B" name="inputB" component={InputAdapter} />
    </>
  )
}

export const SampleUseFormState = () => {
  return (
    <>
      <Card detail={{ title: 'Yup Form' }}>
        <Form
          subscription={{ submitting: true }}
          onSubmit={handleSubmit}
          render={({ handleSubmit, form }) => {
            return (
              <>
                <form onSubmit={handleSubmit}>
                  <Test />
                  <div className="flex gap-x-4">
                    <Button type="submit">submit</Button>
                    <Button type="button" onClick={() => form.restart()}>
                      reset
                    </Button>
                  </div>
                </form>
              </>
            )
          }}
        />
      </Card>
    </>
  )
}
