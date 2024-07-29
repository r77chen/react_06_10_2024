import "./App.css";
import { Button } from "./components/Button/";

function App() {
  const handleClick = () => {
    // console.log("Button clicked");
  };

  return (
    <div className="App">
      <Button onClick={handleClick}>Subscribe</Button>
    </div>
  );
}

export default App;
