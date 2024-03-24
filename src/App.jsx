/* import styles */
import './App.css';
import './styles/base/reset.css'
import './styles/base/typography.css'

/* import components */
import Drive from "./components/drive";
import Diet from "./components/diet";
import Subscribe from "./components/subscribe";

function App() {

  return (
    <>
      <div className='app'>
        <h1>Carbon Footprint Calculator Widget</h1>
        <Drive />
        <Diet />
        <Subscribe />
      </div>
    </>
  );
}

export default App;
