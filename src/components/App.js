import Counter from "./Counter";
import "../App.css";
import Characters from "./Characters";

function App() {
  return (
    <div className="container">
      <h1 className="title">Recoil</h1>
      <Counter />
      <Characters />
    </div>
  );
}

export default App;
