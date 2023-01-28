import { Card } from '@/shared-components/Card'
import { InputAdapter } from '@/shared-components/final-form/InputAdapter'
import { RenderCount } from '@/shared-components/RenderCount'
import { When } from '@/shared-components/When'
import { Form, Field, FormSpy } from 'react-final-form'
import {
  composeValidators,
  minChar,
  minValue,
  mustBeNumber,
  required,
} from '../validators'

/**
 * custom field level validation
 * ไม่ได้ใช้ เก็บไว้เฉย ๆ
 * ref: https://codesandbox.io/s/trigger-validation-onblur-mx7vx?file=/src/index.js:1578-1595
 */

interface IFormData {
  inputA: string
  inputB: string
}

export const Form101 = () => {
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
      <Card detail={{ title: 'Form 101' }}>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitting, pristine, form }) => {
            return (
              <>
                <form onSubmit={handleSubmit}>
                  <div>
                    <Field
                      label="Input A"
                      name="inputA"
                      validate={composeValidators(
                        required,
                        minChar(3),
                        mustBeNumber
                      )}
                      component={InputAdapter}
                    />

                    <Field
                      label="Input A"
                      name="inputB"
                      validate={composeValidators(required, minChar(3))}
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

                  {/* <FormSpy subscription={{ values: true }}>
                    {({ values }) => (
                      <pre className="relative">
                        <RenderCount />
                        {JSON.stringify(values, null, 2)}
                      </pre>
                    )}
                  </FormSpy> */}
                </form>
              </>
            )
          }}
        />
      </Card>
    </>
  )
}
