import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/global.css';
import Homepage from './views/Homepage';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Homepage />
      {/* <Footer /> */}
    </div>
  );
}

export default App;