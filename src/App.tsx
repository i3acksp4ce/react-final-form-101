import { Form101 } from './components/Form/Form101'
import { MainForm } from './components/Subscriptions/MainForm'
import Sample from './components/Sample'

function App() {
  return (
    <>
      <div className="flex my-10 gap-y-6 flex-col items-center">
        <Form101 />
        <MainForm />

        {/* <Sample>
          Sample
          <Sample.Title>Sample title</Sample.Title>
          <Sample.Body>Sample body</Sample.Body>
        </Sample> */}
      </div>
    </>
  )
}

export default App
