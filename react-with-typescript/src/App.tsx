import React from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [buttonClickCount, setButtonClickCount] = React.useState(0);
  const handleClick = () => setButtonClickCount(buttonClickCount + 1);
  return (
    <div className="App">
      <h1>React with TypeScript</h1>
      <Button
        text="Click Me"
        onClick={handleClick}
        type="submit"
        icon="fa fa-cloud"
        className="button"
      >
        ({buttonClickCount})
      </Button>
      <Button
        text="This is link"
        href="http://anishmandal.yzz.com"
        type="submit"
        icon="fa fa-link"
        target="_blank"
        className="link"
      >
        ({buttonClickCount})
      </Button>
    </div>
  );
}

export default App;
