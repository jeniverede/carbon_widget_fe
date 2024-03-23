import './App.css';
import Drive from "./components/drive";
import Diet from "./components/diet";
import Subscribe from "./components/subscribe";


function App() {

  return (
    <>
      <h1>Carbon Footprint Calculator Widget</h1>
      <Drive />
      <Diet/>
      <Subscribe/>
    </>
  );
}

export default App;
