import Button from "./components/Button";

function App() {
  return (
    <main>
      <p>
        <Button el="button">A button</Button>
      </p>
      <p>
        <Button el="anchor" href="www.google.com">
          A link
        </Button>
      </p>
    </main>
  );
}

export default App;
