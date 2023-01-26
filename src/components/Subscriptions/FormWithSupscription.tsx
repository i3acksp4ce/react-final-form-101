import { Card } from '@/shared-components/Card'
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
                    <Field name="inputA" validate={required}>
                      {({ input, meta }) => (
                        <div className="form-control w-full max-w-xs relative">
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
                          <RenderCount />
                        </div>
                      )}
                    </Field>

                    <Field name="inputB" validate={minValue(3)}>
                      {({ input, meta }) => (
                        <div className="form-control w-full max-w-xs relative">
                          <label className="label">
                            <span className="label-text">
                              input B (validate when submit)
                            </span>
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
                                (meta.error && meta.submitError) || meta.touched
                              }
                            >
                              <span className="label-text-alt text-error">
                                {meta.error || meta.submitError}
                              </span>
                            </When>
                          </label>
                          <RenderCount />
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
