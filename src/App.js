import logo from './logo.svg';
import './App.css';
import Weather from "./Search";
import Header from "./Header";
import Forecast from "./Forecast";
import "./sun1.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <div>
          <p>
         <p>WEATHER APP</p>
         <Header/>
         <Weather/>
         <Forecast/>
       
        </p>
        </div>

      </header>
    </div>
  );
}

export default App;
