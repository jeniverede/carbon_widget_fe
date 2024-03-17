import './App.css';
import Drive from "./components/drive";
import Diet from "./components/diet";
import Electricity from "./components/electricity";

function App() {

  return (
    <>
      <h1>Carbon Footprint Calculator Widget</h1>
      <Drive />
      <Diet />
      <Electricity />
    </>
  );
}

export default App;
