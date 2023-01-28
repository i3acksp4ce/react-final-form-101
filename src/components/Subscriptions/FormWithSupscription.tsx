import { Card } from '@/shared-components/Card'
import { InputAdapter } from '@/shared-components/final-form/InputAdapter'
import { RenderCount } from '@/shared-components/RenderCount'
import { When } from '@/shared-components/When'
import { Form, Field, FormSpy, type FormProps } from 'react-final-form'
import { minValue, required } from '../validators'

interface IFormData {
  inputA: string
  inputB: string
}

type PartalFormProps = Pick<FormProps, 'subscription'>

export const FormWithSupscription = ({ subscription }: PartalFormProps) => {
  function isValidWhenSubmit(values: IFormData) {
    if (values.inputB !== 'test') {
      return { inputB: 'inputB must be "test"' }
    }
  }

  const onSubmit = async (values: IFormData) => {
    if (isValidWhenSubmit(values)) {
      return isValidWhenSubmit(values)
    }

    console.log(values)
  }

  return (
    <>
      <div>
        <Form
          onSubmit={onSubmit}
          subscription={subscription}
          render={({ handleSubmit, submitting, pristine, form }) => {
            return (
              <>
                <form onSubmit={handleSubmit}>
                  <div>
                    <Field
                      label="input A"
                      name="inputA"
                      validate={required}
                      component={InputAdapter}
                    />

                    <Field
                      label="input B"
                      name="inputB"
                      validate={minValue(300)}
                      component={InputAdapter}
                    />
                  </div>

                  <div className="flex gap-x-4">
                    <button className="btn" type="submit">
                      Submit
                    </button>
                    <button
                      className="btn"
                      type="button"
                      onClick={() => form.reset()}
                    >
                      Reset
                    </button>

                    <button
                      className="btn"
                      type="button"
                      onClick={() => form.restart()}
                    >
                      Restart
                    </button>
                  </div>

                  <FormSpy subscription={{ values: true }}>
                    {({ values }) => (
                      <pre className="relative">
                        <RenderCount />
                        {JSON.stringify(values, null, 2)}
                      </pre>
                    )}
                  </FormSpy>
                </form>
              </>
            )
          }}
        />
      </div>
    </>
  )
}
