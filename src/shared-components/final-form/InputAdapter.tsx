import { Input, InputErrorMessage, InputLabel } from '../Input'
import { FieldRenderProps } from 'react-final-form'

export const InputAdapter: React.ComponentType<FieldRenderProps<'input'>> = ({
  label,
  input,
  meta,
  ...rest
}) => {
  return (
    <>
      <Input {...input} {...rest}>
        {label && <InputLabel>{label}</InputLabel>}

        {(meta.error || meta.submitError) && meta.touched && (
          <InputErrorMessage>
            {meta.error || meta.submitError}
          </InputErrorMessage>
        )}
      </Input>
    </>
  )
}
