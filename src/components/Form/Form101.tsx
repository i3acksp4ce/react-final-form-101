import { Card } from '@/shared-components/Card'
import { When } from '@/shared-components/When'
import { Form, Field } from 'react-final-form'
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
                      name="inputA"
                      validate={composeValidators(
                        required,
                        minChar(3),
                        mustBeNumber
                      )}
                    >
                      {({ input, meta }) => (
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text">input A</span>
                          </label>
                          <input
                            {...input}
                            type="text"
                            placeholder="type here"
                            className="input input-bordered w-full max-w-xs"
                          />
                          <label className="label">
                            <When is={meta.error && meta.touched}>
                              <span className="label-text-alt text-error">
                                {meta.error}
                              </span>
                            </When>
                          </label>
                        </div>
                      )}
                    </Field>

                    <Field
                      name="inputB"
                      validate={composeValidators(required, minChar(3))}
                    >
                      {({ input, meta }) => (
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text">input B</span>
                          </label>
                          <input
                            {...input}
                            type="text"
                            placeholder="type here"
                            className="input input-bordered w-full max-w-xs"
                          />
                          <label className="label">
                            <When
                              is={
                                (meta.error || meta.submitError) && meta.touched
                              }
                            >
                              <span className="label-text-alt text-error">
                                {meta.error || meta.submitError}
                              </span>
                            </When>
                          </label>
                        </div>
                      )}
                    </Field>
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
                </form>
              </>
            )
          }}
        />
      </Card>
    </>
  )
}
