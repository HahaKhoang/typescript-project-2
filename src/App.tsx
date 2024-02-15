import { useRef } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Form, { type FormHandle } from "./components/Form";

function App() {
  const customForm = useRef<FormHandle>(null);

  function saveHandler(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={saveHandler} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
