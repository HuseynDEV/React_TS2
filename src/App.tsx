import Button from "./component/Button"
import Input from "./component/Input"
import Container from "./component/Container"
import { Demo } from "./component/Demo"
import { useRef } from "react"


const App = () => {

  const input = useRef(null)

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

    <Input label="Test" id='test' ref={ input} />

  </main>
}

export default App