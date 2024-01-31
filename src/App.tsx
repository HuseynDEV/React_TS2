import Button from "./component/Button"
import Input from "./component/Input"


const App = () => {
  return <main>
    {/* <Input id='name' label='Your name' type='text' disabled/>
    <Input id='age' label='Your age' type='number' /> */}
    <p>
      <Button target="">a Button</Button>
    </p>
    <p>
      <Button href='https://google.com'>a Button</Button>
    </p>
  </main>
}

export default App