import Button from "./component/Button"
import Input from "./component/Input"
import Container from "./component/Container"
import { Demo } from "./component/Demo"
import { useRef } from "react"
import Form, {type FormHandle} from "./component/Form"

const App = () => {

  const customRef = useRef<FormHandle>(null)

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string }
    customRef.current?.clear()

  }

  return <main>
    {/* <Input id='name' label='Your name' type='text' disabled/>
    <Input id='age' label='Your age' type='number' /> */}
    {/* <p>
      <Button >a Button</Button>
    </p>
    <p>
      <Button  href='https://google.com'>a Button</Button>
    </p> */}
    {/* <Container as={Button}>Click Me</Container> */}

    {/* <Demo/> */}

    {/* <Input label="Test" id='test' ref={ input} /> */}


    <Form onSave={handleSave} ref={customRef}>
      <Input label="Name" id='name' type="text" />
      <Input label="Age" id='age' type="number" />
      <p>
        <Button>Save</Button>
      </p>
    </Form>

  </main>
}

export default App