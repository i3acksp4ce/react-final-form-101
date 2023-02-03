import { Button } from '@/shared-components/Button'
import { Card } from '@/shared-components/Card'
import { InputAdapter } from '@/shared-components/final-form/InputAdapter'
import { useFinalFormResolver } from '@/shared-components/final-form/useFinalFormResolver'
import { Field, Form } from 'react-final-form'
import { yupFormValidateSchema } from './validateSchema'

interface IFormValues {
  inputA: string
}

export const YupForm = () => {
  const validateSchema = useFinalFormResolver<IFormValues>(
    yupFormValidateSchema
  )

  const onSubmit = async (value: IFormValues) => {
    console.log(value)
  }
  return (
    <>
      <Card detail={{ title: 'Yup Form' }}>
        <Form
          onSubmit={onSubmit}
          subscription={{ submitting: true, pristine: true }}
          validate={validateSchema}
          render={({ handleSubmit, form }) => {
            return (
              <>
                <form onSubmit={handleSubmit}>
                  <Field
                    label="input A"
                    name="inputA"
                    component={InputAdapter}
                  />
                </form>

                <div className="flex gap-x-4">
                  <Button type="submit">submit</Button>
                  <Button type="button" onClick={() => form.restart()}>
                    reset
                  </Button>
                </div>
              </>
            )
          }}
        />
      </Card>
    </>
  )
}
