import { Form101 } from './components/Form/Form101'
import { MainForm } from './components/Subscriptions/MainForm'
import Sample from './components/Sample'
import { Input, InputErrorMessage, InputLabel } from './shared-components/Input'
import { useState } from 'react'
import { YupForm } from './components/yup-example/YupForm'
import { SampleUseFormState } from './components/use-form-state/SampleUseFormState'

function App() {
  const [value, setValue] = useState<string>()
  return (
    <>
      <div className="flex my-10 gap-y-6 flex-col items-center">
        {/* <Form101 />

        <MainForm /> */}

        {/* <Sample>
          Sample
          <Sample.Title>Sample title</Sample.Title>
          <Sample.Body>Sample body</Sample.Body>
        </Sample> */}

        {/* <p>{value}</p>
        <Input onChange={(e) => setValue(e.target.value)}>
          <InputLabel>Input A</InputLabel>
          <InputErrorMessage>Error</InputErrorMessage>
        </Input> */}

        {/* <YupForm /> */}

        <SampleUseFormState />
      </div>
    </>
  )
}

export default App
